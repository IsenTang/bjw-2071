<template>
  <div>
    <button @click="closeHomePage">关掉这个home页面</button>
    <Home v-if="isShowHome"></Home>
    <Work></Work>
  </div>
</template>

<script>
import Home from "./components/home.vue";
import Work from "./components/work"
export default {
  name: "App",
  data () {
    return {
      isShowHome: true
    }
  },
  components: {
    Home, Work
  },
  methods: {
    closeHomePage () {
      this.isShowHome = !this.isShowHome;
    }
  },
};
</script>
