import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"
Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");


// 页面上取值
// $store.getters.doubleCount
// $store.state.count 
