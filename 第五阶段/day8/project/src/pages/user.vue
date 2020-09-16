<template>
  <div>
    <h1>
     user 用户 id是{{ userId }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userId: null
    }
  },
  created() {
    const params = this.$route.params;
    this.userId = params.id;
    console.log('params', params);
    console.log('route', params.userId);

  },
}
</script>

<style lang="scss">
  
</style>