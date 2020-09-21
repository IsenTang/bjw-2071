import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "./home"
import login from "./login"

const store = new Vuex.Store({
  strict: true, // 严格模式
  // 定义vuex初始数据
  state: {},
  mutations: {},
  modules: {
    login,
    home
  }
})
export default store