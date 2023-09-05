import backend from "./back-end-code";
import React from "react";

const fetchONES = (path: string) => {};

const request = (url) => {
  // @ones-api-ignore
  return fetchONES(`api/project/api${url}`);
};

const API = {
  getUser: () => `/users/me`,
  updateUser: (teamUUID) => `/team/${teamUUID}/`,
};

// @ones-api: /test/ai/dasdasd
const normalRequest = "dahsdkakljllkjkjklda";

/**
 * @ones-api: /test/ai
 */
const path =
  "dsdasl/" + normalRequest + "hdksjhka" + "dasdas/dasdasd" + "dasdasdas";

const anotherPath = `${"dsadasdsa/dasdasd"}/dasdasd` + "ddasda";

const path2 = "dasdas" + "dasdasd/";

fetchONES("api/project/users/me");

const Demo = () => {
  return <div className="dsds/dasfasfas"></div>;
};
