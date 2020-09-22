const work = {
  namespaced: true,
  state: {
    user: {}
  },
  // mutations定义修改state状态的方法，commit调用
  mutations: {
    setUserInfo(state, data) {
      state.user = data;
    }
  }
}
export default work