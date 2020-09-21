<template>
  <div class="about">
    <h1>登录</h1>
    <div class="form">
      <input type="text" placeholder="姓名">
      <input type="text" placeholder="年龄">
      <input type="text" placeholder="性别">
      <input type="text" placeholder="大学">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss">
.form{
  width: 400px;
  margin: 0 auto;
  input{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    display: block;
  }
}
</style>