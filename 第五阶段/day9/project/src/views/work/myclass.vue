<template>
  <div>
    <h1>我的课程</h1>

    <button @click="jump">跳出去</button>
  </div>
</template>

<script>
export default {
  name: 'myclass',
  methods: {
    jump () {
      this.$router.push({
        name: 'Login'
      })
    }
  },
}
</script>