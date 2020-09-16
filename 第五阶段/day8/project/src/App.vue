<template>
  <div class="container">
    <router-view class="main"></router-view>
    <router-view class="slide" name="slide"></router-view>
    <router-view class="nav" name="nav"></router-view>
  </div>
</template>

<script>
let obj = {
  name: "App",
  created() {
    
  },
};
export default obj
</script>

<style lang="scss">
.container{
  position: relative;
}
.slide{
  width: 100px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(92, 91, 91);
}
.nav{
  position: fixed;
  top: 0;
  left: 100px;
  right: 0;
  height: 100px;
  background-color: rgb(40, 40, 40);
}
.main{
  position: fixed;
  top: 100px;
  left: 100px;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
