import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Father from './components/Father.vue';
import Child from './components/Child.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/foo', component: Father },
  { path: '/bar', component: Child }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
