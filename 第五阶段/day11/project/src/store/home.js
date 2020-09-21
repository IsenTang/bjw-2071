const home = {
  namespaced: true,
  state: {
    count: 10,
    list: [
      { title: '11111111', isFinish: false },
      { title: '222222', isFinish: true },
      { title: '333333', isFinish: false },
      { title: '444444', isFinish: true },
      { title: '5555555', isFinish: false },
    ]
  },
  // 相当于state的计算属性
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    finishList(state) {
      let arr = state.list.filter(item => {
        return item.isFinish
      })
      return arr
    }
  },
  // mutations定义修改state状态的方法，commit调用
  mutations: {
    addCount(state) {
      state.count += 10;
    },
    addCount2(state, value) {
      console.log("value", value);
      state.count += value.count;
    }
  },
  actions: {
    // addCount3(store, value) {
    //   console.log("store", store);
    //   store.commit("addCount", value)
    // },
    // 解构写法
    addCount3({ commit }, value) {
      commit("addCount", value)
    }
  }
}

export default home