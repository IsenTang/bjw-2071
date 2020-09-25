import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { post, get, put, del } from "./utils/axios";
Vue.prototype.yPost = post;
Vue.prototype.yGet = get;
Vue.prototype.yPut = put;
Vue.prototype.yDel = del;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
