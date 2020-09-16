<template>
  <div>
    关于我们
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      name: ''
    }
  },
  created() {
    console.log('router', this.$route)
    console.log('params', this.$route.params);
    // this.name = this.$route.params.b.name;

    // this.$router.push({}) // 跳转
    // this.$route.params    // 接收参数
    // console.log('route', this.$route)
    // const query = this.$route.query;
    // console.log('query:',query)
    // console.log('list:', JSON.parse(query.list))
  },
}
</script>

<style lang="scss">
  
</style>