import request from "../utils/request.js";

// 文章列表
export function article() {
  return request({
    url: "/api/blog/1/10",
    method: "get",
  });
}
