# React和Vue 状态上的区别

感官上，都差不多。react和vue都是基于状态的改变来触发虚拟DOM，最终通过diff算法尽可能少的改变真实DOM。但是有什么区别呢？

### vue的数据响应式

```vue
<template>
  <div id="app" class="app123">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg='msg'/>

    <div>{{ message }}</div>

    <A @test='test'/>

    <input type="text" placeholder="用户名：6位以上数字和密码组成" >

    <button @click="change()"> state </button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import HelloWorld from './components/HelloWorld.vue'
import A from './components/A';
// import Number from './components/Number'

let obj = {
  name:'isen',
  msg:'Welcome to Your Vue.js App',
  message:'123'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    A
    // Number
  },
  data(){
    return obj;
  },

  updated(){

    console.log('app updated');
  },
  methods:{
    change: function(){

      this.$data.msg = 'changed'
    },
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

### react的全量更新

```jsx

let obj = {
                    name:'app-name',
                    msg:'init-msg'
        }

class App extends React.Component{

  constructor(props){

    super(props)

    this.state = obj
  }

  componentDidUpdate(){

    console.log('app componentDidUpdate ');

  }

  click = () =>{

    this.setState({

      msg:'changed-msg'
    },()=>{
      
      console.log(this.state === obj);
    })
  }

  render(){

    console.log('App render');
    return (

      <div>
        <div>App</div>

        <Child name={ this.state.name }/>

        <div> { this.state.message }</div>

        <button onClick={ this.click }>click</button>
      </div>
    )
  }
}

class Child extends React.Component{

  constructor(){
    super();
    this.state = {
      msg: 'child-init-message'
    }
  }




  componentWillReceiveProps(nextProps){

    // console.log(' componentWillReceiveProps ');

    // console.log('nextProps ===>', nextProps);

    // console.log(this.props);

    // this.setState({
    //     msg:'componentWillReceiveProps-message'
    // })
  }

  // shouldComponentUpdate(nextProps, nextState){

  //     console.log('shouldComponentUpdate');

  //     console.log('nextProps ===>', nextProps);

  //     console.log(this.props);

  //     return true;
  // }


  componentDidUpdate(){

    console.log('child componentDidUpdate ');

  }


  render(){

    console.log('child render');
    return (
      <div>
        <div>{ this.props.name }</div>  

        <div>{ this.state.msg }</div>
      </div>
    )
  }

}



ReactDOM.render(
  <App name='isen'/>,
  document.getElementById('example')
);
```



