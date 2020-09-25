import * as types from "./mutation-type"

const work = {
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem('userinfo')) || {}
  },
  // mutations定义修改state状态的方法，commit调用
  mutations: {
    [types.SET_USER_INFO] (state, data) {
      state.user = data;
    }
  },
  actions: {
    setUser({ commit }, data) {
      localStorage.setItem('userinfo', JSON.stringify(data));
      commit(types.SET_USER_INFO, data)
    }
  }
}
export default work