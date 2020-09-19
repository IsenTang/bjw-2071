import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: "/club",
    name: "club",
    component: () => import("../views/club.vue"),
    meta: {
      title: '俱乐部',
      isShowHeader: false,
      isShowFooter: false,
    }
  },
  {
    path: "/club/detail",
    name: "clubDetail",
    component: () => import("../views/clubDetail.vue"),
    meta: {
      isShowHeader: false,
      isShowFooter: true,
      title: '俱乐部详情'
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue"),
    meta: {
      isShowHeader: true,
      isShowFooter: false,
      title: '联系我们'
    }
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/join.vue")
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../views/work.vue"),
    meta: {
      isShowHeader: false,
      isShowFooter: false,
      title: '作业'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
