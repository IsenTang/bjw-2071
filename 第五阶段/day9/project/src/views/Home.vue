<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="jumpAbout">跳到about页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    jumpAbout () {
      this.$router.push({
        path: '/about/123'
        // name: 'About',
        // parmas: {
        //   name: '123'
        // }
      })
    }
  },
};
</script>
