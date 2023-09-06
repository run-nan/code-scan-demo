import { parse } from "@babel/parser";
import traverser from "@babel/traverse";
import t from "@babel/types";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import fse from "fs-extra";
import { apisStr } from "./apis.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const traverse = traverser.default;

const codeBuffer = await fse.readFile(
  resolve(__dirname, "../code/front-end-code.tsx")
);
const code = codeBuffer.toString();

const ast = parse(code, {
  plugins: ["jsx", "typescript"],
  sourceType: "unambiguous",
});

const collected = [];
const ignoredLines = [];

const isIgnored = (node) => {
  return ignoredLines.includes(node.loc.start.line);
};

const isPathLikeStringNode = (node) => {
  if (t.isStringLiteral(node)) {
    return node.value.includes("/");
  } else if (t.isTemplateLiteral(node)) {
    const { quasis = [] } = node;
    const templateStrings = quasis.map((quasi) => quasi.value.raw).join("");
    return templateStrings.includes("/");
  }
  return false;
};

const isPathLikeBinaryExpressionNode = (node) => {
  if (
    t.isBinaryExpression(node, {
      operator: "+",
    })
  ) {
    const { left, right } = node;
    for (const subNode of [left, right]) {
      if (isPathLikeStringNode(subNode)) {
        return true;
      }
    }
  }
  return false;
};

traverse(ast, {
  Program: (path) => {
    const commentsNodes = path.parent.comments;
    commentsNodes.forEach((comment) => {
      const content = comment.value
        .split("")
        .filter((char) => !["\n", "*"].includes(char))
        .join("")
        .trim();
      if (content === "@ones-api-ignore-file") {
        path.stop();
      }
      const { line, column } = comment.loc.start;
      if (content === "@ones-api-ignore") {
        ignoredLines.push(line + 1);
      }
      const [_, rawApi] = content.split("@ones-api:");
      const api = rawApi && rawApi.trim();
      if (api && api.includes("/")) {
        collected.push({
          value: api,
          location: {
            line,
            column,
          },
        });
      }
    });
  },
  ImportDeclaration: (path) => {
    path.skip();
  },
  ExportNamedDeclaration: (path) => {
    path.skip();
  },
  "StringLiteral|TemplateLiteral": (path) => {
    if (!isIgnored(path.node) && isPathLikeStringNode(path.node)) {
      const { line, column } = path.node.loc.start;
      collected.push({
        value: path.toString(),
        location: {
          line,
          column,
        },
        ast: path.node,
      });
      if (t.isTemplateLiteral(path.node)) {
        path.skip();
      }
    }
  },
  BinaryExpression: (path) => {
    if (!isIgnored(path.node) && isPathLikeBinaryExpressionNode(path.node)) {
      const targetPath = path.find(
        (p) =>
          t.isBinaryExpression(p.node, { operator: "+" }) &&
          !t.isBinaryExpression(p.parent, { operator: "+" })
      );
      const { line, column } = targetPath.node.loc.start;
      collected.push({
        value: targetPath.toString(),
        location: {
          line,
          column,
        },
        ast: targetPath.node,
      });
      path.skip();
    }
  },
});

const pre = "(?:[^\n]*)";
const placeHolder = "(?:[^\n/]*)";
const post = "(?:[^\n]*)";

// 把识别到的pathLike的字符串转为正则表达式：(?:[^\n]*)${url}(?:\n)
const transformStringLiteralToPattern = (value) => {
  const [url] = value.split("?");
  return url;
};

const transformTemplateLiteralToPattern = (ast) => {
  const { quasis = [] } = ast;
  const url = quasis
    .map((quasi) => quasi.value.raw.split("?")[0])
    .join(placeHolder);
  return url;
};

const transformBinaryExpressionToPattern = (ast) => {
  let pattern = "";
  const { left, right } = ast;
  for (const subNode of [right, left]) {
    if (t.isStringLiteral(subNode)) {
      pattern = transformStringLiteralToPattern(subNode.value) + pattern;
    } else if (t.isTemplateLiteral(subNode)) {
      pattern = transformTemplateLiteralToPattern(subNode) + pattern;
    } else if (t.isBinaryExpression(subNode, { operator: "+" })) {
      pattern = transformBinaryExpressionToPattern(subNode) + pattern;
    } else {
      pattern = placeHolder + pattern;
    }
  }
  return pattern;
};

collected.forEach((item) => {
  const { ast, value } = item;
  let patternStr = "";
  if (!ast) {
    patternStr = transformStringLiteralToPattern(value);
  } else if (t.isStringLiteral(ast)) {
    patternStr = transformStringLiteralToPattern(ast.value);
  } else if (t.isTemplateLiteral(ast)) {
    patternStr = transformTemplateLiteralToPattern(ast);
  } else if (t.isBinaryExpression(ast, { operator: "+" })) {
    patternStr = transformBinaryExpressionToPattern(ast);
  }
  if (patternStr) {
    item.pattern = new RegExp(`${pre}${patternStr}${post}`, "ig");
    item.match = apisStr.match(item.pattern);
  }
});

console.log(
  collected.map(({ value, pattern, location, match }) => ({
    value,
    location,
    pattern,
    match,
  }))
);
