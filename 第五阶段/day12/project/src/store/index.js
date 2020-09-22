import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    list: [
      { name: '肖战' },
      { name: '王一博' },
      { name: '彭于晏' },
      { name: '张翰' }
    ]
  },
  mutations: {
    updateLogin(state) {
      state.isLogin = !state.isLogin;
    },
    updateList(state, value) {
      console.log('bvalue', value)
      state.list = value;
    }
  },
  actions: {},
  modules: {}
});
