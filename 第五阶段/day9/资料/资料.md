





* 导航守卫是什么，什么情况下用到?

​       其实，导航守卫就是路由跳转过程中的一些钩子函数，大白话一点讲：路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿的时机，这就是导航守卫。

​       用处：判断登录  或者 项目中有什么奇怪的需求



* 全局前置守卫

```
router.beforeEach((to, from, next) => {
  // ...
})
```





* next属性

```
next()         // 继续执行
next(false)    // 取消导航
next({
   name: 'home',
   path: '/home'
})


eg： 
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from);
  const isLogin = localStorage.getItem('isLogin')
  if (to.name == 'contact') {
    if (!isLogin) {
      console.log('没登录')
      next({
        name: 'home'
      })
    }
    return
  }
  console.log(from.name, '继续')
  next();
})
```







* 全局解析守卫

和 beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

```
router.beforeResolve((to, from, next) => {
  // ...
})
```







* 全局后置钩子

```
router.afterEach((to, from) => {
  // ...
})
```







* 路由独享守卫

```
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```







* 组件内的守卫

```
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
```







* 路由懒加载（当路由被访问的时候才加载对应页面组件）

```
component: () => import('../pages/home')
```















* 嵌套路由

```

```



