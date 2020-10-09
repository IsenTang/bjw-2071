<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div> {{ value }} </div>
    <HelloWorld msg="Welcome to Your Vue.js "/>

    <h1 v-if="awesome">Vue is awesome!</h1>

    <div> {{ person.name }}</div>
    <div> {{ person.age }}</div>

    <input type="text" v-model='inputValue' @change='changed()'>
    <button @click="onClick()">click me</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){

    return {
      value:'123',
      awesome:false,
      inputValue:'',
      person:{
        name:'isen'
      }
    }
  },
  components: {
    HelloWorld
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
    onClick(){

      // this.$data.person.age = 28;

      this.$set(this.$data.person,'age',28)
      console.log(this.$data.person);

      // this.$forceUpdate();
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
