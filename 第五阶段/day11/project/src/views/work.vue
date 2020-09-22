<template>
  <div>
    <div class="left">
      <h1>作业</h1>
      <p>姓名：{{ user.name }}</p>
      <p>性别：{{ user.sex }}</p>
      <p>年龄：{{ user.age }}</p>
      <p>大学：{{ user.school }}</p>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      // user: this.$store.state.work.user
    }
  },
  computed: {
    user () {
      return this.$store.state.work.user
    }
  },
  mounted() {
    console.log('user', this.user)
  },
}
</script>

<style lang="scss">
.left{
  width: 240px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(99, 99, 99);
  h1{
    font-size: 20px;
    color: #fff;
  }
  p{
    font-size: 16px;
    color: #fff;
    line-height: 50px;
  }
}
.right{
  position: fixed;
  left: 240px;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>