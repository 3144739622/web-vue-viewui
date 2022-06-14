const ENV = {
  'test': 'https://test.pisenpower.com/pc/api/',
  'dev': 'https://test.pisenpower.com/pc/api/',
  // 'dev': 'http://cq4m8u.natappfree.cc/',
  // 'dev': 'http://192.168.22.57:9003/',
  'pro': 'https://app.pisenpower.com/pc/api/'
}

const MODE = process.env.VUE_APP_MODE;

const ERRORMSG = {
  401: "未授权，请重新登录！",
  500: "服务器异常，请联系工作人员"
}

module.exports = {
  request: ENV[MODE], // 不同环境的请求地址
  timeout: 6000, // 超时时间
  ERRORMSG,
  file: {
    url: 'https://app.pisenpower.com/'
  },
  basicUrl: {
    errorImage: 'https://qiniu.pisenpower.com/none_jpg.jpg', // 错误图片
    loading: 'https://qiniu.pisenpower.com/loading_gif2.gif' // loading图片
  },
  auth: {
    TokenKey: 'authorization-web', // 本地存储的token key值
    expires: 2 // token过期时间
  },
  websocket: {
    dev: 'wss://app.pisenpower.com/websocket/',
    pro: 'wss://192.168.1.61:9148/websocket/',
    url: MODE === 'pro' ? 'wss://app.pisenpower.com/websocket/' : 'wss://192.168.1.61:9148/websocket/'
  }
}