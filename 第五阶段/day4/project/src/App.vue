<template>
  <div id="appvue">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  components: {
    Home
  },
};
</script>

<style>
#appvue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
