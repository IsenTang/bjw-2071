import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

import store from "../store/index"

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/user',
    component: Home,
    children: [
      { path: 'user', name: 'user', component: () => import('../views/user.vue') },
      { path: 'mall', name: 'mall', component: () => import('../views/mall.vue') }
    ]
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/regist.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫：拦截 去登录和注册之外的页面，判断是否登录，登录放行，否则强制跳到登录
router.beforeEach((to, from, next) => {
  if (to.name == 'login' || to.name == 'regist') {
    next();
  } else {
    const user = store.state.login.user;
    if (user && JSON.stringify(user) !== '{}') {
      next();
    } else {
      next({
        name: 'login'
      })
    }
  }
})

export default router
