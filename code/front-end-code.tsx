import backend from "./back-end-code";
import React from "react";

const fetchONES = (path: string) => {};

const request = (url) => {
  // @ones-api-ignore
  return fetchONES(`api/project/api${url}`);
};

const API = {
  getVersion: () => "/version",
  // @ones-api: /auth/v2/login
  // @ones-api: /auth/login
  // @ones-api-ignore
  login: () => `/auth${process.env.ENV === "production" ? "/v2" : ""}/login`,
  getTeamMembers: (teamUUID) => `/team/${teamUUID}/members`,
  updateIssueType: (teamUUID, issueTypeUUID) =>
    `/team/${teamUUID}/issue_type/` + issueTypeUUID + "/update",
  ldapLogin: (query) => `/ldap/login?${query}`,
};

const normalStr = "dahsdkakljllkjkjklda";

fetchONES("api/project/auth/v2/reset_password");

export const Demo = () => {
  React.useEffect(() => {
    request(API.getVersion());
    request(API.login());
    request(API.getTeamMembers("teamUUID"));
    request(API.updateIssueType("teamUUID", "issueTypeUUID"));
    request(API.ldapLogin("query"));
  }, []);
  // @ones-api-ignore
  return <div className="dsds/dasfasfas">{normalStr}</div>;
};
