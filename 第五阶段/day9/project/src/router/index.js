import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/index.vue";
import About from "../views/About.vue";
// import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/user",
    name: 'user',
    redirect: {name: 'myClass'},
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: "myclass",
        name: 'myClass',
        component: () => import('../views/user/myClass.vue'),
      },
      {
        path: "setting",
        name: 'setting',
        component: () => import('../views/user/setting.vue'),
      },
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:name",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/login.vue'),
    beforeEnter: (to, from, next) => {
      console.log('路由独享守卫 beforeEnter')
      next();
    }
  },
  {
    path: '/work',
    name: 'work',
    redirect: '/work/setting',
    component: () => import('../views/work/index.vue'),
    children: [
      {
        path: "myclass",
        name: 'myclass',
        component: () => import('../views/work/myclass.vue'),
      },
      {
        path: "setting",
        name: 'setting',
        component: () => import('../views/work/setting.vue'),
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  const isLogin = localStorage.getItem('isLogin') || false;
  // console.log('from', from)
  // console.log('to', to)
  const loginList = ['About', 'User', 'Mall']
  if (to.name == 'About') {
    if (!isLogin) {
      console.log("你没登录，不允许进啊");
      next({
        name: 'Login'
      });
      return
    } else {
      console.log('你已经登录，可以进入about页面哦！！')
      next()
      return 
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log("afterEach")
})

export default router;
