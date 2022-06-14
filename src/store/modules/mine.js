/* eslint-disable no-undef */
/**
 *   我的
 */
export default {
  namespaced: true, // 开启命名空间
  state: {
    token: sessionStorage.getItem('token') || '', // 用户token
    userDes: null
  },
  mutations: {
    SETUSERDES(state, userDes) {
      state.userDes = userDes
      sessionStorage.setItem('userDes', userDes);
    }
  },
  actions: {
    // 获取用户缴纳的押金
    async GETUSERDES({ commit }) {
      commit('SETUSERDES', '99');
      return 99
    }
  }
}
