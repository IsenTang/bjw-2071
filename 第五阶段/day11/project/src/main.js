import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;



new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");


// 页面上取值
// $store.getters.doubleCount
// $store.state.count 
