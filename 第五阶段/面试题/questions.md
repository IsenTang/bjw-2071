

* 说说你对vuex的理解，vuex有哪些作用
* v-if  与  v-show的区别
* vue-router中路由守卫的作用
* vue组件间的参数传递
* 对于MVVM的理解
* 什么是Vue生命周期，vue的生命周期有哪些
* hash模式和history模式的区别
* 守卫钩子 有哪几个参数，分别是干嘛的
* keep-alive的理解
* vue中key的作用
* $route 和 $router 的区别
* slot 是什么？如何使用？
* 对promise的理解
* async、await的理解
* vue 路由之间传值有几种方式
* 动态路由怎么设置
* vuex中，模块内定义的方法或数据重名了，怎么处理
* 计算属性 和 监听的区别
* 计算属性和方法的区别
* ref 的用处
* 为什么尽量不要把 `v-for` 和 `v-if`  同时用在同一个元素上
* 深拷贝 浅拷贝的区别
* 路由容器是什么



* Vue的双向数据绑定原理
* vue是如何解析 .vue结尾的文件，如何编译的呢？
* diff算法 是干嘛的，说说你对diff算法的理解？





































































# 解析：



* vuex的理解

```
vuex是一个专门服务于vue的状态管理模式，可以帮助我们管理共享状态，也就是管理全局变量

vuex使用一个store对象管理应用的状态，store包括：state,getters，mutations,actions，modules五个属性：

state: state意为'状态'，是vuex状态管理的数据源
getter: getter的作用与filters有一些相似，可以将state的值过滤
mutation: mutation是vuex中改变state的唯一途径，并且只能同步操作
action: 一些对state的异步操作可以放在action中，由action中提交mutaion变更状态
module: 当store对象过于庞大时，可以根据具体的业务需求划分模块

vuex能解决非父子组件间传值问题，能够减少请求次数

缺点是刷新数据会重置

```





* v-if  与  v-show的区别？

```
v-if按照条件是否渲染，v-show是display的block或none

v-if 根据判断条件动态的 删除DOM元素，或创建元素。

v-show 根据判断条件 改变元素 display属性，并不会删除元素
显示时：display: block 或 inline-block；
隐藏时： display: none



====> 频繁的进行增删DOM操作会影响页面加载速度和性能，因此

v-if和v-show都可以用来进行判断展示和隐藏，但元素频繁的显示隐藏时 不推荐使用v-if来进行判断展示和隐藏，推荐使用v-show；

```





* vue-router中路由守卫的作用

```
可以在发生路由行为时拦截路由，进行一些需求判断，然后控制路由继续跳转或取消导航行为。

```





* vue组件间的参数传递

```
1. 父子之间

   父传子: 父组件通过v-bind: 绑定值，子组件通过props接受参数;
   子传父: $emit事件传递参数


2. 非父子组件间的数据传递

   vuex: 状态管理工具
   eventBus: 创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。（这个不常用，感兴趣可查阅文档）

```





* 对MVVM的理解

```
MVVM 是 Model-View-ViewModel 的缩写。

model指数据层，view指视图层，viewmodel指监听器，

在MVVM模式中，model和view没有直接的联系，而是通过viewmodel实现双向绑定

MVVM 要解决的一个问题是将业务逻辑代码与视图代码完全分离，使各自的职责更加清晰

MVVM与MVC最大的区别就是：它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素改变View，而是数据model改变后，对应的View层会自动改变。

```





* 什么是Vue生命周期？vue的生命周期有哪些

```
1. Vue生命周期指一个Vue实例从创建到销毁的过程

2. 分为8个阶段

beforeCreate() {}, // 组件实例刚被创建，开始初始化数据
created() {},      // 组件实例创建完成，属性已绑定(即数据已经有了),此时DOM还未生成
beforeMount() {},  // 模板编译、挂载之前
mounted() {},      // 编译、挂载完成，此时DOM元素已经被创建
beforeUpdate() {}, // 组件实例更新之前
updated() {},      // 组件实例更新完成
beforeDestroy() {},// 组件被销毁之前
destroyed() {},    // 组件已被销毁


===> 那个生命周期内适合做哪些事情，去看看之前的课件，回忆一下

```





* hash模式和history模式的区别？

```
hash形式：http://www.abc.com/#/hello
history形式：http://www.abc.com/hello


首先在表现形式上：
hash模式会在链接后面拼接上#，history是没有#的


功能上：
1. hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了
2. hash 虽然出现在URL中，但不会被包括在 HTTP 请求中，因此改变 hash 不会重新加载页面。
3. history 利用了HTML5中新增的 pushState() 和 replaceState()，可以对浏览器历史记录栈进行修改。
4. hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由
```





* 守卫钩子 有哪几个参数，分别是干嘛的？

```
多数的守卫钩子 都包含三个参数  to  from  next

to: 跳转的目标路由对象

from: 当前导航正要离开的路由对象

next分以下三个: 

1. next()   继续导航行为
2. next(false)  取消导航行为
3. next({
        name: 'routeName'   改变目标导航
   })

```






* keep-alive的理解

```
keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

在vue 2.x 版本之后，keep-alive新加入了两个属性:
include (包含的组件缓存)
exclude (排除的组件不缓存，优先级大于include) 。



=======> 例子：
<keep-alive include='include-components' exclude='exclude-components'>
  <component>
    <!-- 该组件是否缓存取决于include和exclude属性 -->
  </component>
</keep-alive>


=====> 参数解释
include - 字符串或正则表达式，只有名称匹配的组件会被缓存
exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存
include 和 exclude 的属性允许组件有条件地缓存。二者都可以用 , 分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind:

===> 使用示例

<!-- 逗号分隔字符串，只有组件a与b被缓存。 -->
<keep-alive include="a,b">
  <component></component>
</keep-alive>

<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->
<keep-alive :include="/a|b/">
  <component></component>
</keep-alive>

<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->
<keep-alive :include="['a', 'b']">
  <component></component>
</keep-alive>


```





* vue中key的作用

```
当使用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

```





* $route 和 $router 的区别

```
$route 是路由信息对象，包含path,name,params,query,fullPath,matched等参数

$router 是路由实例，包含路由的跳转方法，钩子函数等

```





* slot 是什么？如何使用？

```
slot: 插槽: 具名插槽、匿名插槽

在引用子组件的 开始标签和结束标签之间，插入一个任意一个元素，用slot标签包裹一下 或者设置属性slot="组件内对应的slot的name"，在父组件调用子组件的时候，这个插槽就会插入到子组件对应的具名插槽的位置。

slot 有一个 name 属性，加 name 属性就是具名插槽，不加就是匿名插槽。




====> 例子
子组件 header 内：
<div>
   <slot name="slotRight"></slot>
</div>


父组件：
<header>
   <div slot="slotRight">
      <img src="分享按钮图片链接" alt="" />
   </div>
</header>

```





* 对promise的理解

```
promise 是异步函数的解决方案，从语法上讲 promise 是一个对象，可以获取异步操作的消息

promise 有三个状态，pending 等待状态、fulfilled 成功状态、rejected 失败状态，状态一旦更改，就不会在变

创造出 promise 实例后，他会立刻执行，promise 有两个API  resolve 和 reject
resolve 代表的是回调成功后的函数，reject 代表的是失败后返回的结果
原型上有两个放法：.then 和 .catch 方法，例如请求接口 .then 拿到的是数据，通过 .catch 捕获错误异常

```





* async、await的理解

```
async 函数的返回值是一个 Promise 对象。当这个 async 函数返回一个值时，Promise的 resolve 方法会负责传递这个值、相当于Promise.resolve(value)；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值（相当于Promise.reject(value)）。

　　async 函数中可能会有 await 表达式，await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其处理结果作为 await 表达式的值，继续执行 async function

```





* vue 路由之间传值有几种方式

```
使用 $router.params 传参

使用 动态路由传参

使用 $router.query 传参
　　
```





* 动态路由怎么设置

```
定义路由时在path项中拼接  /:id         id是参数名字，不是固定死的

跳转时可在path上拼接参数
this.$router.push({
   path: 'news/23'
})

也可在parmas里带参数
this.$router.push({
   name: 'news',
   params: {
      id: 23
   }
})

```





* vuex中，模块内定义的方法或数据重名了，怎么处理

```
可在模块内增加属性 namespaced: true

使其封闭命名空间，使用时 ==> 模块名/方法名

```





* 计算属性和监听的区别

```
watch 一次只能监听一个值，computed 可以对依赖的所有值监听

computed支持缓存，如果数据没改变会优先从缓存中取数据，方法不支持缓存，watch不支持缓存，只要数据变就会执行相应操作

computed不支持异步，watch支持异步，，setTimeout

```





* 计算属性和方法的区别

```
计算属性: computed 的依赖值不变化时，会从缓存中获取，不会重新计算

方法: 不管依赖的数据变不变，methods都会重新计算

```





* ref 的用处

```
1. 可以获取dom元素

2. 可以通过ref属性获取组件内的数据或 执行组件内的方法



============> 例子

子组件 HelloWorld :
data() {
   return {
      msg: "hello world"
   }
},
methods: {
   sayHelllo () {
      console.log("我是子组件内的方法， 我执行了哦！！")
   }
}


父组件:
<HelloWorld ref="hello"></HelloWorld>

this.$refs.hello.msg
this.$refs.hello.sayHelllo()

```





* 为什么尽量不要把 `v-for` 和 `v-if`  同时用在同一个元素上

```
v-for的优先级比v-if高



========> 比如有这样一段代码
<ul>
   <li v-for="item in users" v-if="item.isShow">
      <p>{{ item.name }}</p>
      <p>{{ item.age }}</p>
   </li>
</ul>


我们以js代码模拟下以上代码的执行顺序
this.users.map( item => {
   if(user.isActive){
      return user.id
   }
})

如果我们在li标签上设置了width、height、margin 等之类的样式，循环中某项 不符合判断条件时 还是会渲染出一个空的li标签，这样就与我们的实际需求不符合了。
```





* 深拷贝 浅拷贝的区别

```
浅拷贝：仅仅是指向被复制的内存地址，如果原地址内的值发生改变，那么浅拷贝出来的对象里的值也会相应的改变。

深拷贝：在内存中开辟一块新的地址用于存放复制出来的对象。



=====>

如果拷贝的对象只是简单的数组或对象，没有函数、Symbol、RegExp等特殊类型的值,可用以下方式简单的转换
JSON.parse(JSON.stringify())


也可以用lodash插件实现(可以深拷贝特殊类型的值)
_.cloneDeep(value)

```





* Vue的双向数据绑定原理

```

vue是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。



具体步骤：
第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: 1、在自身实例化时往属性订阅器(dep)里面添加自己 2、自身必须有一个update()方法 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新;视图交互变化(input) -> 数据model变更的双向绑定效果。


```





* vue是如何解析 .vue结尾的文件，如何编译的呢？

```
.vue 是通过 vue-loader 转换的

vue-loader是webpack中的loader，可以将vue文件转换为JS模块，同理我们在安装sass的时候 不是也手动安装了一个sass-loader用于把scss样式转化成普通css。

cli脚手架在新建项目时会为我们自动配置webpack打包工具，也就自带了vue-loader，不需要自己安装


```





* diff算法 是干嘛的，说说你对diff算法的理解？

```
diff算法是vue中，发生了dom更新时，高效的对比新旧虚拟dom树的算法

理解：
渲染真实DOM的开销是非常大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排，那diff算法就可以帮助我们只更新差异部分。

过程
首先会根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的newVnode，然后newVnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为newVnode。diff的过程其实就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。



=========>
patch 方法中具体执行过程如下：

在patch方法中会调用 sameVnode 方法，通过 sameVnode 方法判断 newVnode 与 oldVnode 是否相同

如果不相同，直接销毁 oldVnode，将 newVnode 添加到dom中

如果相同，则调用 patchVnode 方法比较下属节点（patchVnode 就是递归调用 updateChildren 的函数）

如果 oldVnode 有子节点而 newVnode 没有，则删除dom的子节点

如果他们都有文本节点并且不相等，那么将dom的文本节点设置为 newVnode 的文本节点。

如果 oldVnode 没有子节点而 newVnode 有，则将 newVnode 的子节点真实化之后添加到dom

如果两者都有子节点，则执行 updateChildren 函数比较子节点

在 updateChildren 函数中，使用 while循环 遍历下面的子节点，并通过回调 sameVnode 方法继续进行判断，直到子节点对比完成


```









