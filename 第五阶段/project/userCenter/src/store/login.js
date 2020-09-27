import * as types from "./mutations-type"
import { get } from '../util/axios'

const login = {
    state: {
      user: JSON.parse(localStorage.getItem('user')) || {}
    },
    mutations: {
      [types.SET_USER_INFO](state, data) {
          state.user = data
      },
      [types.CLEAR_USER](state) {
          state.user = {}
      }
    },
    actions: {
      async setUser({ state, commit }, value) {
        /*
         * 如果参数是字符串类型，并且值为getUserInfo 我们就认为 需要重新请求用户信息
         * 否则判断value是否是对象类型，是对象类型则直接赋值
        */ 
        if (typeof value === 'string' && value == 'getUserInfo') {
          const res = await get('/user/userinfo', {
            params: {
              id: state.user._id
            }
          });

          if (res && JSON.stringify(res) !== '{}') {

            localStorage.setItem('user', JSON.stringify(res))

            let userInfo = JSON.parse(JSON.stringify(res));

            commit(types.SET_USER_INFO, userInfo); // 提交mutation

          }
        } else if (typeof value === 'object') {

          localStorage.setItem('user', JSON.stringify(value))

          commit(types.SET_USER_INFO, value); // 提交mutation

        }
      },
      logout({ commit }) {
        // removeStorage('user');
        localStorage.removeItem('user')
        commit(types.CLEAR_USER);
      }
    }
}
export default login