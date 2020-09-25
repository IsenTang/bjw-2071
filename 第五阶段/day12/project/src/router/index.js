import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>import("../views/login.vue")
  },

  {
    path: "/work/login",
    name: "workLogin",
    component: () => import("../views/work/login.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../views/work/index.vue"),
    children: [
      {
        path: "user/info",
        name: 'userinfo',
        component: () => import("../views/work/userinfo.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
