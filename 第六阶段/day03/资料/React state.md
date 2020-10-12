# React state

## 状态 

类比于vue中的data，每一个组件都有自己的状态。那么什么叫做状态呢？

#### state代表着一个组件完整的状态集，任何组件的改变都会从state的变化中反映出来，值得注意的是，state中的所有状态都是用于反映组件ui的变化，没有任何多余的状态，用不需要通过其他状态计算而来的中间状态。

其实就是页面 UI 跟 `Javascript` 变量的同步，我们称之为状态同步。



### 变量是否可以作为组件state？

1. 这个变量是否是通过Props从父组件中获取？如果是，那么它不是一个状态。
2. 这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。
3. 这个变量是否可以通过其他状态（State）或者属性(Props)计算得到？如果是，那么它不是一个状态。
4. 这个变量是否在组件的render方法中使用？如果**不是**，那么它不是一个状态。这种情况下，这个变量更适合定义为组件的一个普通属性，例如组件中用到的定时器，就应该直接定义为this.timer，而不是this.state.timer。



### 那么state与props的区别？

简单来说，改变state和props都会修改组件，但是state对于本组件是可读可写的，但是props只是可读的，想要修改props，只能通过该组件的父组件修改，父组件正是通过修改子组件的props，传递子组件所需要的状态。



初始化状态与修改状态

```jsx
class ArrayElements extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      str : '123'
    };
  }

  test(){

    this.setState({
      str:'223'
    });
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <span>{this.props.name}</span>
        { eles }
        <span> { this.state.str }</span>
        <Child/>
        // 问题来了，为啥要bind(this)?
        <button onClick={ this.test.bind(this) }>click</button>
      </div>

    );

  }
}

class Child extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className='child'>
        child

      </div>
    )
  }
}


ReactDOM.render(
  <ArrayElements name='isen'/>,
  document.getElementById('example')
);
```

通过state修改子组件props

```jsx
class Element extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      name : 'child-name'
    }
  }

  changeChildName = () =>{

    this.setState({
      name:'changed-name'
    });
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <span>{this.props.name}</span>
        <Child name={ this.state.name }/>

        <button onClick={ this.changeChildName }>change</button>
      </div>

    );

  }
}

class Child extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <div>
        <span>{this.props.name}</span>

      </div>

    );

  }
}


ReactDOM.render(
  <Element name='isen'/>,
  document.getElementById('example')
);
```

子组件修改父组件的state （回调的方式）

```jsx
class Element extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      name:'name'
    }
  }

  click = (val)=>{

    this.setState({
      name:val
    })
  }


  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <span>{this.state.name}</span>

        <div>
          <button onClick={ ()=>{ this.click('element-click') } }> element-click</button>
        </div>


        <Child name='child-name' func={ () =>{this.click('child-click')} }/>
      </div>

    );
  }
}

class Child extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <button onClick={ this.props.func }>child-click</button>
      </div>

    );
  }
}



ReactDOM.render(
  <Element name='isen'/>,
  document.getElementById('example')
);
```

修改同级组件：（状态提升）

```jsx
 class Element extends React.Component{

   constructor(props){
     super(props)

     this.state = {
       name:'name',
       name1:'name1',
       name2:'name2'
     }
   }

   click1 = ()=>{

     this.setState({
       name2:'changed-name2'
     })
   }

   click2 = ()=>{

     this.setState({
       name1:'changed-name1'
     })
   }


   render(){

     return (
       <div>
         <span>{this.state.name}</span>

         <Child1 name={this.state.name1} func={ () =>{this.click1()} }/>
         <Child2 name={this.state.name2} func={ () =>{this.click2()} }/>
       </div>

     );
   }
}

class Child1 extends React.Component{

  constructor(props){
    super(props)

  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <div> { this.props.name }</div>
        <button onClick={ this.props.func }>child1-click</button>
      </div>
    );
  }
}

class Child2 extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <div> { this.props.name }</div>
        <button onClick={ this.props.func }>child2-click</button>
      </div>
    );
  }
}



ReactDOM.render(
  <Element name='isen'/>,
  document.getElementById('example')
);
```

修改同级组件（vue，状态提升）

```vue
<template>
  <div id="app" class="app123">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg='msg'/>

    <!-- <div> {{name}} </div> -->

    <A @test='test'/>
    <!-- <button @click="test()">test</button> -->

    <!-- eslint-disable -->
    <!-- <Number v-for=" (item,index) in this.$data.array " :key='item.key' :num='item.num' :index='index' 
    :color='item.color' @remove='remove' ></Number> -->
    

    <!-- <button @click='add()'>add</button> -->

    <input type="text" placeholder="用户名：6位以上数字和密码组成" >
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import HelloWorld from './components/HelloWorld.vue'
import A from './components/A';
// import Number from './components/Number'

let obj = {
  name:'isen',
  msg:'Welcome to Your Vue.js App'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    A
    // Number
  },
  data(){

    // return {
    //   name:'isen',
    //   msg:'Welcome to Your Vue.js App',
    //   array:
    //   [
    //     {
    //       num:1,
    //       color:'red',
    //       key:uuidv4()
    //     },
    //     {
    //       num:2,
    //       color:'blue',
    //       key:uuidv4()
    //     },
    //     {
    //       num:3,
    //       color:'green',
    //       key:uuidv4()
    //     },
    //     {
    //       num:4,
    //       color:'yellow',
    //       key:uuidv4()
    //     },
    //     {
    //       num:5,
    //       color:'aqua',
    //       key:uuidv4()
    //     },
    //     {
    //       num:6,
    //       color:'pink',
    //       key:uuidv4()
    //     },
    //   ]
    // }

    return obj;
  },

  updated(){

    console.log('updated');
  },
  methods:{
    test: function(val){

      this.$data.msg = val
      // console.log(this.$data === obj);
      // this.$data.name = 'isen'

      // console.log(obj);
      // console.log(this);
      // this.$data.msg = '123'
      // setTimeout(()=>{

      //   console.log(this);
      // },0)

      
    },

    remove(val){

      let data = [];
      data = this.array.filter((item=>{

        return !(item.num === val)
      }))
      // this.array.splice(val,1)

      this.array = data;
    },
    add(){
      // this.array.unshift({
      //     num:0,
      //     color:'yellow',
      //     key:uuidv4()
      // })

      this.array.splice(2,0,{
          num:0,
          color:'yellow',
          key:uuidv4()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

##### 状态提升可以解决问题，但是会遇到一个新的问题，

还有别的方式么？

那么我们学习的vuex呢？

