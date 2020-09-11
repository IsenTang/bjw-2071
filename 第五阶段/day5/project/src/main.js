import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config"
import Moment from "moment"
import Header from "./components/header"

Vue.config.productionTip = false;


Vue.directive('oss-src', function (el, binding) {
  let imgURL = binding.value;//获取图片地址
  if (imgURL) el.setAttribute('src',
  Config.ossPath + imgURL);
})


Vue.filter('globalFormatTime', (value) => {
  let time = Moment(value).format('YYYY-MM-DD hh:mm:ss')
  return time
})

Vue.component('global-header', Header)





new Vue({
  render: h => h(App)
}).$mount("#app");
