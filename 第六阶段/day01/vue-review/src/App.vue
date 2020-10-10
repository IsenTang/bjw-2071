<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div> {{ value | test }} </div>
    <HelloWorld msg="Welcome to Your Vue.js " @send='onSend'/>

    <h1 v-if="awesome">Vue is awesome!</h1>

    <div> {{ person.name }}</div>
    <div> {{ person.age }}</div>

    <div> {{ afterValue }}</div>

    <input type="text" v-model='inputValue' @change='changed()'>
    <button @click="onClick()">click me</button>

    <Num v-for="(item) in items" :num='item.value' :key='item.key'></Num>
    <!-- <Child></Child> -->

    <router-view></router-view>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';
import HelloWorld from './components/HelloWorld.vue'
// import Child from './components/Child';
import Num from './components/Num';

export default {
  name: 'App',
  data(){

    return {
      value:'123',
      awesome:false,
      inputValue:'',
      person:{
        name:'isen'
      },
      items:[{
        value:1,
        key:uuidv4()
      },
      {
        value:2,
        key:uuidv4()
      },
      {
        value:3,
        key:uuidv4()
      },
      {
        value:4,
        key:uuidv4()
      },
      {
        value:5,
        key:uuidv4()
      },]
    }
  },
  components: {
    HelloWorld,
    // Child
    Num
  },
  beforeCreate(){
    console.log(' beforeCreate ====>',this.$data);
  },

  created(){
    console.log('created ====>',this.$data);
  },
  methods:{
    changed(){

      console.log(this.$data.inputValue);
    },
    onClick:function(){

      // this.$data.person.age = 28;

      // this.$set(this.$data.person,'age',28)
      // console.log(this.$data.person);

      // this.$forceUpdate();

      // this.$data.value = '233333333'

      console.log(this);
      // this.items.splice(2,1);
    },
    onSend(v){

      console.log(v);
    }
  },
  computed:{

    afterValue(){

      return this.$data.value + 'after'
    }
  },
  filters:{
    test(){

      return '22222'
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
