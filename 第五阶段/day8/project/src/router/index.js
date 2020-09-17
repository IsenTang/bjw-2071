import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/home.vue";
import About from "../pages/about.vue"
import Contact from "../pages/contact.vue"
import User from "../pages/user.vue"
import Test from "../pages/test.vue"
import Work from "../pages/work.vue"
import Detail from "../pages/detail.vue"


const routes = [
  {
    path: "/",
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/contact',
    name: 'contact',
    alias: '/ccc',
    component: Contact
  },
  {
    path: "/home",
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/user/:id/abc/:ld',
    name: 'user',
    component: User
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",   // hash
  base: '/',
  routes
});

export default router;