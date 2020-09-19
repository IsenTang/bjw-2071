







* 嵌套路由重定向

```
redirect: {name: 'myClass'},
redirect: '/user/myclass'
```







* meta（路由元信息）

```
eg1: 判断是否显示头部
{
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      isShow: false
    }
}

isShow() {
      const routeMeta = this.$route.meta;
      if (routeMeta.isShow) {
        return true;
      } else {
        return false;
      }
}



eg2：
统一修改title
document.title = routeMeta.title;
```









* 路由的过渡动效

```
<transition name="fade">
   <router-view></router-view>
</transition>


// 离开时立马消失，出现时渐隐渐现
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}


// 离开、出现都渐隐渐现
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```















* Element-ui安装

```
yarn add element-ui
```







* Element-ui简单使用

```
官网
```





* element-ui（https://element.eleme.cn/#/zh-CN/component/installation）



* Mint-ui（http://mint-ui.github.io/docs/#/en2/loadmore）



* Cube-ui（https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start）