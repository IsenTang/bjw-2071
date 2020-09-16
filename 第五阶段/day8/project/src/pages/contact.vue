<template>
  <div>
    <h1>练习我们</h1>
    <router-link to="/test">跳转到test</router-link>
    <router-link :to="{name: 'test'}">跳转到test</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss">
  
</style>