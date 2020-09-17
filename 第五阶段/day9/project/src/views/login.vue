<template>
  <div class="about">
    <h1>请登录</h1>
    <input type="text" placeholder="输入用户名">
    <input type="text" placeholder="密码">
  </div>
</template>

<script>
export default {
  name: 'Login',
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log("destroyed")
  },
  beforeRouteEnter (to, from, next) {
    console.log('守卫：beforeRouteEnter')
    next();
  },
  beforeRouteUpdate (to, from, next) {
    console.log('守卫：beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('守卫：beforeRouteLeave')
    next()
  },
}
</script>
