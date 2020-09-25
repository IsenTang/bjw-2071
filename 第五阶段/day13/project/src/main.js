import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { get, post, put, del } from "./utils/fetch"
Vue.prototype.yGet = get
Vue.prototype.yPost = post
Vue.prototype.yPut = put
Vue.prototype.yDel = del


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
