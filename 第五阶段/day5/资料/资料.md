

* 作业













* moment

```
yarn add moment
yarn add   // 安装
yarn remove  // 卸载

* 官网
http://momentjs.cn/


* eg
moment().format('MMMM Do YYYY, h:mm:ss a'); // 九月 10日 2020, 9:08:49 晚上
moment().format('dddd');                    // 星期四
moment().format("MMM Do YY");               // 9月 10日 20
moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
moment().format();                          // 2020-09-10T21:08:49+08:00
```









* 全局组件声明
* 全局过滤器声明

```
import Moment from 'moment';

Vue.filter('formatDate', value => Moment(value).format('YYYY-MM-DD HH:mm:ss'));
```













* 虚拟DOM

```
1. 虚拟DOM的好处
当浏览器收到一个dom修改操作时，它不知道后面还有没有其他DOM操作，会马上执行当前dom更新操作
假如一个js操作中有20个dom更新，那么真实DOM会执行20次，如果这20个里面有有同一个元素多次操作，每次都会执行，上一次的更新就是无用功，白白更新了一次。
那么虚拟dom，他收到更新时，不会立马执行dom修改，会将更新生成新的虚拟dom树，用新树和旧树进行对比（diff算法），记录这两棵树差异。差异部分 是我们需要对页面真正的DOM操作部分，然后执行真正的DOM更新
```



```
<div id="content">
   <p>{{ title }}</p>
   <ul class="list">
      <li v-for="item in list">{{ item }}<li>
   </ul>
</div>
data () {
   return {
      title: '标题一一一'
      list: []
   }
}
 
const vDom = {
   tag: 'div',
   attrs:{
      id:'content'
   },
   children:[
      {tag:'p',content: title},
      {tag:'ul',attrs:{className:'list'}}
   ]
}


当我们在data里改变了数据
this.list.push('11111')
this.list.push('22222')

const newDom = {
   tag: 'div',
   attrs: {
      id: 'content'
   },
   children: [
      {tag: 'p', content: 2},
      {tag: 'ul', attrs: {className: 'list'}, children: [
         {tag: 'li', content: '11111'},
         {tag: 'li', content: '22222'}
      ]}
   ]
}
```





* diff算法

```
<div v-for="(item, index) in list" :key="index">

</div>

list = [
{ 11 }
{ 44 }  
{ 22 } key
 { 33 } key
]

list = [
{ 11 }
{ 44 }
{ 22 }
{ 33 }
]
```











* ref 使用

```
<input ref="inputt" />


updateInput () {
	this.$refs.inputt.value = 'inputinput'
}


document.getElementById("inputt")   // 可以使用，但官方不建议用
```





















* 生命周期

| new Vue                                | 创建vue实例                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| init events & lifecycle                | 开始初始化 时间 和 生命周期                                  |
| beforeCreate                           | 组件刚被创建，组建属性计算之前，如data属性等                 |
| init injections & reactivity           | 通过依赖注入导入依赖项                                       |
| created                                | 组件实例创建完成，属性已绑定，此时DOM还未生成                |
| el属性                                 | 检查vue配置，即new Vue{}里面的el项是否存在，有就继续检查template项。没有则等到手动绑定调用vm.$mount() |
| template                               | 检查配置中的template，如果没有，则取outerHTML（即外部的html） |
| beforeMount                            | 模板编译、挂载之前                                           |
| create vm.$el and replace “el” with it | 编译，并替换了被绑定元素     ？？？？1 ？？？？              |
| mounted                                | 编译、挂载       ？？？？2 ？？？？？                        |
| Before update                          | 组件更新之前                                                 |
| updated                                | 组件更新之后                                                 |
| beforeDestroy                          | 组件被销毁之前（可在此做统计类操作：记录用户操作，新闻浏览记录，视频观看进度。。。。） |
| destroyed                              | 组件被销毁                                                   |

注意： 

* $el替换el

`el`是Vue实例的挂载目标，在实例挂载之后，元素可以用 `vm.$el` 访问。

挂载阶段还没开始的时候，`$el`属性是不可见的。Vue生命周期mounted阶段，`el`被新创建的`vm.$el`替换,这个时候Vue实例的挂载目标确定， DOM渲染完毕。在这个Vue实例当中，也就可以使用`vm.$el`访问到`el`了。

* mounted

这个生命周期里，DOM元素已经被创建，但是可能由于性能 网速等等原因影响，DOM元素并未完全创建完，保险做法在 nextTick中做DOM操作

```
this.$nextTick(() => {
   this.getClassDeatil();
})
```

```
eg： 在mounted之前调用会报错
this.$refs.footerBox.offsetWidth   // 获取元素宽高
document.body.clientWidth          // 获取窗口宽度
```





创建阶段

![image-20200910205014387](/Users/edz/file/Vue课程/资料/image-20200910205014387.png)

更新阶段

![image-20200910205100799](/Users/edz/file/Vue课程/资料/image-20200910205100799.png)

销毁阶段

![image-20200910205127477](/Users/edz/file/Vue课程/资料/image-20200910205127477.png)



















* mixin混入

```
定义并导出mixin
export default {
    data () {
      return {
        message: 'hello',
        foo: 'abc'
      }
    },
    methods: {
        sayHello () {
            alert('hello，你好呀！！！！')
        }
    },
}

* 引入mixin
import hello from '../mixin/hello'

* 声明mixin
mixins: [ hello ],



好几个页面 同事使用多个组件的时候 也可用mixin 一起引入     egegeg

```







![image-20200910214452746](/Users/edz/file/Vue课程/资料/image-20200910214452746.png)







* mixin vs 组件

组件在引用之后相当于在父组件内开辟了一块单独的空间，来根据父组件props过来的值进行相应的操作，单本质上两者还是泾渭分明，相对独立。

mixins是在引入之后，将组件内部的内容如data，computed、method等属性与父组件相应内容进行合并。相当于在引入后，父组件的各种属性方法都被扩充了。mixin是js文件，没有template模板













