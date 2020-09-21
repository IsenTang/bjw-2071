const login = {
  namespaced: true,
  state: {
    isLogin: true,
    count: 1000
  },
  getters: {
    strCount(state) {
      return 'lo' + state.count
    }
  },
  // mutations定义修改state状态的方法，commit调用
  mutations: {
    updateLogin(state, value) {
      state.isLogin = value;
    },
    addCount(state) {
      state.count += 1000
    }
  },
  actions: {
    updateACtion({ commit }) {
      commit('addCount');
    }
  }
}
export default login