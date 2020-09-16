




* sass后面vue create项目时 直接选择安装css 编译器

```
node-sass是自动编译实时的
dart-sass需要保存后才会生效
```





* 安装vue-router

```
yarn add vue-router
```





* Vue-Router

```
Vue Router是基于vue的一套路由管理器
```





* 单页应用(spa)     VS     服务端渲染(ssr)

```
ssr:
		优点：首次加载时间短
		     SEO效果好
		缺点：切换页面慢，每次都要重新请求html
		     服务端渲染，增大服务器压力





spa: 
    优点：切换页面快，只是将当前页面的内容清除掉，然后下一个页面的内容挂载到当前页面上
         按条件渲染，减少了重绘回流，提高了渲染速度(*)
         浏览器渲染，减小服务器压力(*)
    缺点：首次加载没有ssr快，SEO效果差
    
    
    
eg： 后台管理页面，slide+nav。。。 都不需要重新渲染
```



## ssr

![image-20200915114247611](/Users/edz/file/Vue课程/资料/image-20200915114247611.png)

## spa

![image-20200915114334556](/Users/edz/file/Vue课程/资料/image-20200915114334556.png)



* 为什么单页应用首次加载时间短

​       为实现单页功能及显示效果，需要在首次加载时将 JS、CSS，全局依赖统一加载，部分页面可以在需要的时候加载。一个大型的成熟项目所需的依赖是很多的，所以必须对JavaScript及CSS代码进行合并压缩处理，都是需要时间的。

​      那么服务端渲染，当前html需要那个依赖，加载一下当前页面的依赖就可以









* 安装

```
yarn add vue-router
```





* 路由注册

```
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HOme
  }
];

const router = new VueRouter({
  mode: "history",               // 访问路径不带#号，还有一种hash的模式，路径中带#
  base: '/',        // 配置单页应用的基路径
  						      // 配置了'/aa/bb' 的情况下，访问http://localhost:8080/ 和 http://localhost:8081/aa/bb 一样
  routes            // 路由表
});

export default router;

```





* 路由跳转

```
* push方式（栈内追加一条路由）
this.$router.push({
   path: '/home'
})


* replace方式（替换当前路由）
this.$router.replace({
   path: '/home'
})


* go方式
this.$router.go(-1) 后退一个页面
this.$router.go(1) 前进一个页面


* 行内方式  router-link 会被转化成a标签
<router-link to="/home"></router-link>

```





* 路由命名

```
 {
    path: "/",
    name: "home"
    component: Home
  }
  
  this.replace.push({
     name: 'home'
  })
  
  <router-link :to="{name: 'home'}">跳转到test</router-link>
```





* 路由重定向

```
路由重定向

redirect: '/home' 
redirect: {name: 'home'}
```





* 别名alias（给home起个别名为/myhome，意味着当用户访问/myhome时，链接保持/myhome，但是显示页面为home页，就像用户访问/home一样)

```
{ path: '/', redirect: '/myhome' },
{ path: '/home', component: Home, alias: '/myhome' },
```





* 路由传参  =>  params

```
this.$router.push({
   name: 'home',
   params: {
      a: {
         name: '哈哈哈哈啊啊哈',
         b: {
            value: 'help！！！救命！！我是参数竟然不认识我？？'
         }
      }
   }
})

this.$route.params;

缺点：页面刷新，参数会丢失
```





* 路由传参  =>  query

```
this.$router.push({
   name: 'home',
   query: {
      a: {
         name: '哈哈哈哈啊啊哈',
         b: {
            value: 'help！！！救命！！我是参数竟然不认识我？？'
         }
      }
   }
})

this.$route.query;

多层级对象时，需要JSON.stringify() + JSON.parse() 处理一下

缺点：参数拼接在路径中，明文暴露
```





* 路由传参  =>  动态路由

```
path: '/contact/:id'

this.$router.push({
	path: '/contact/4'
	path: '/contact/'+4
})

this.$router.push({
   name: 'contact',
   params: {
      id: 4
   }
})


this.$route.params

缺点：需要在路由中定义，比较麻烦，不灵活，但避免了以上两种的确定啊，不会丢失参数，也不会明文传输参数
```













* 命名视图

```
<router-view class="main"></router-view>
<router-view class="slide" name="slide"></router-view>
<router-view class="nav" name="nav"></router-view>

{
    path: "/home",
    name: 'home',
    // component: Home
    components: {
      default: Home,
      slide: Slide,
      nav: Nav
    }
  },

```

















