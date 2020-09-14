import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config"

Vue.config.productionTip = false;

Vue.directive('oss-path', function (el, binding) {
  let imgURL = binding.value;//获取图片地址
  if (imgURL) el.setAttribute('src',
  Config.ossPath + imgURL);
})

new Vue({
  render: h => h(App)
}).$mount("#app");
