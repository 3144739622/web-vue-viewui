// 封装请求参数
import request from './request.js'

const get = (api, data, setting) => {
  let url = api;
  let method = "GET";
  return request({ url, method, data, setting });
}
const post = (api, data, setting) => {
  let url = api;
  let method = "POST";
  let header = { "content-type": "application/json" };
  let dataType = "json";
  return request({ url, method, data, dataType, header, setting });
}

export default { get, post };
