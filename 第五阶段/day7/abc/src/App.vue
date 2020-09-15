<template>
  <div>
    <div class="btn-box">
      <button @click="change('less')">less</button>
      <button @click="change('sass')">sass</button>
    </div>
    <Less v-if="page==='less'" msg="Welcome to Your Vue.js App" />
    <Sass v-else msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Less from "./components/less.vue";
import Sass from "./components/sass.vue";

export default {
  name: "App",
  components: {
    Less, Sass
  },
  data () {
    return {
      page: 'sass'
    }
  },
  methods:{
    change (name) {
      this.page = name;
    }
  }
};
</script>

<style lang="less">
.btn-box{
  width: 100%;
  button {
    display: inline-block;
    width: 48%;
    height: 40px;
    border: none;
    margin: 0 1%;
  }
}
</style>
