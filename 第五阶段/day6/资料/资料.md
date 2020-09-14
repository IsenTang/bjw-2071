



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





















* 过渡：css过渡

```
<transition name="fade"></transition>



v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。



transform: rotate(15deg);    // 旋转角度
transition: all 3s;   // 3秒动画过程


transform eg:
1、translate(10px, 10px) 设置盒子位移
2、scale(x,y) 设置盒子缩放
3、rotate(deg) 设置盒子2D旋转
8、rotateX(30deg)、rotateY(30deg)、rotateZ(30deg) 设置三D旋转
```





* js过渡

```
 v-on:before-enter="beforeEnter"
 v-on:enter="enter"
 v-on:after-enter="afterEnter"
 v-on:enter-cancelled="enterCancelled"

v-on:before-leave="beforeLeave"
v-on:leave="leave"
v-on:after-leave="afterLeave"
v-on:leave-cancelled="leaveCancelled"



颜色不支持英文 eg：”red“
```























* 动态组件

```
<component :is="activeComp"></component>

data() {
   return {
      activeComp: 'componentName'
   }
}


* keep-alive 保持状态
```

















* small  demo

半圆个人中心

