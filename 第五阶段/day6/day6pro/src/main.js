import Vue from "vue";
import App from "./App.vue";
import less from "less"

Vue.use(less)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
