import { createStore } from 'vuex'
import getters from './getters'
import common from './modules/common'
import mine from './modules/mine'
import menu from './modules/menu'

export default createStore({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
    mine,
    menu
  }
})
