// 封装请求
import axios from 'axios'
import { Message } from 'view-ui-plus'

import basicConfig from '@/config'
import store from '@/store'

// 请求
let request = axios.create({
  baseURL: basicConfig.request,
  timeout: basicConfig.timeout
})
// 请求拦截
request.interceptors.request.use(config => {
  // 请求头设置
  let token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = token
    store.dispatch('common/GETTOKEN', token)
  }
  return config
}, err => {
  console.log(err);
})
// 响应拦截
request.interceptors.response.use(response => {
  // console.log('response', response);
  // 对响应码的处理
  Message.error(basicConfig.ERRORMSG[response.data.code] || response.data.msg);
  return response.data
}, err => {
  console.log('err', err);
  Message.error('请求异常');
})

export default request;