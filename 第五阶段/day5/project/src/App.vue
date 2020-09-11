<template>
  <div>
  <button @click="closeHomePage">关掉这个home页面</button>
    <Home v-if="isShowHome"></Home>
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  data () {
    return {
      isShowHome: true
    }
  },
  components: {
    Home
  },
  methods: {
    closeHomePage () {
      this.isShowHome = !this.isShowHome;
    }
  },
};
</script>
