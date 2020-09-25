import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import * as types from "./mutation-type";
import work from "./work" 

export default new Vuex.Store({
  state: {
    isLogin: false,
    list: [
      { name: '肖战' },{ name: '王一博' },
      { name: 
        '彭于晏' },{ name: '张翰' }
    ],
    user: JSON.parse(localStorage.getItem('userInfo')) || {} // 用户登录信息
  },
  mutations: {
    [ types.UPDATE_LOGIN ](state, value1) {
      console.log("value", value1)
      state.isLogin = value1;
    },
    [types.UPDATE_LIST] (state, value) {
      console.log('bvalue', value)
      state.list = value;
    },
    [ types.UPDATE_USER_INFO ](state, data) {
      console.log('传递过来大数据', data)
      state.user = data;
    }
  },
  actions: {
    updateLoginState ( { commit }, value ) {
      commit(types.UPDATE_LOGIN, value)
    },
    action1({ commit }) {
      commit(types.UPDATE_LIST)
    },
    updateUserInfo({ commit }, obj) {
      localStorage.setItem('userInfo', JSON.stringify(obj));
      commit(types.UPDATE_USER_INFO, obj)
    }
  },
  modules: {
    work
  }
});
