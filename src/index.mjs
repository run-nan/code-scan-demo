import { parse } from "@babel/parser";
import traverser from "@babel/traverse";
import generator from "@babel/generator";
import t from "@babel/types";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import fse from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const traverse = traverser.default;
const generate = generator.default;

const generateCode = (ast) => {
  const { code } = generate(ast);
  return code;
};

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
  "StringLiteral|TemplateLiteral": (path) => {
    if (!isIgnored(path.node) && isPathLikeStringNode(path.node)) {
      const { line, column } = path.node.loc.start;
      collected.push({
        value: path.toString(),
        location: {
          line,
          column,
          ast: path.node,
        },
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
          ast: targetPath.node,
        },
      });
      path.skip();
    }
  },
});

// 把识别到的pathLike的字符串转为正则表达式：(?:[^\n]+)?/auth/(?:[^\n]+)/reset_password/dasdasd(?:[^\n]+)
transformStringLiteralToPattern = ({ value, ast }) => {
  return;
};

console.log(collected);
