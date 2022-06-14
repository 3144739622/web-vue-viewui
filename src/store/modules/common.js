/* eslint-disable no-undef */
/**
 *   公共数据
 */
export default {
  namespaced: true, // 开启命名空间
  state: {
    token: sessionStorage.getItem('token') || '' // 用户token
  },
  mutations: {
    SETTOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('token', token);
    },
    // 前端 登出
    LOGINOUT(state) {
      state.token = token
      sessionStorage.removeItem('token');
    }
  },
  actions: {
    // 获取用户缴纳的押金
    async GETTOKEN({ commit }, token) {
      // 异步请求
      commit('SETTOKEN', token);
      return token
    }
  }
}
