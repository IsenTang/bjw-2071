import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Config from "./util/config" // 引入全局配置文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import { get, post,put,del } from './util/axios'
Vue.prototype.yGet = get
Vue.prototype.yPost = post
Vue.prototype.yPut = put
Vue.prototype.yDel = del

// 自定义指令
Vue.directive('img-path', (el, attrs) => {
  let value = attrs.value;
  if( value ) el.setAttribute('src', Config.ossStaticPath + value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
