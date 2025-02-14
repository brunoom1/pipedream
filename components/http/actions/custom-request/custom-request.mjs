import { axios } from "@pipedream/platform";
import http from "../../http.app.mjs";

export default {
  key: "http-custom-request",
  name: "Custom Request",
  description: "Make an HTTP request using any method and URL. Optionally configure query string parameters, headers and basic auth.",
  type: "action",
  version: "0.1.2",
  props: {
    http,
    url: {
      propDefinition: [
        http,
        "url",
      ],
    },
    method: {
      propDefinition: [
        http,
        "method",
      ],
    },
    data: {
      propDefinition: [
        http,
        "body",
      ],
    },
    params: {
      propDefinition: [
        http,
        "params",
      ],
    },
    headers: {
      propDefinition: [
        http,
        "headers",
      ],
    },
    auth: {
      propDefinition: [
        http,
        "auth",
      ],
    },
  },
  async run({ $ }) {
    const {
      data,
      headers,
      method,
      params,
      url,
    } = this;
    const config = {
      url,
      method,
      data,
      params,
      headers,
    };
    if (this.auth) config.auth = this.http.parseAuth(this.auth);
    return await axios($, config);
  },
}
;
