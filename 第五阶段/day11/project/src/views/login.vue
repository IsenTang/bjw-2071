<template>
  <div class="about">
    <h1>登录</h1>
    <div class="form">
      <input type="text" placeholder="姓名" v-model="name">
      <input type="number" placeholder="年龄" v-model="age">
      <input type="text" placeholder="性别" v-model="sex">
      <input type="text" placeholder="大学" v-model="school">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      age: null,
      sex: '未知',
      school: ''
    }
  },
  methods: {
    login () {
      if(!this.name){
        this.$message.error('请输入姓名');
      } else if (!this.age) {
        this.$message.error('请输入年龄');
      } else if (this.sex==='未知') {
        this.$message.error('请输入性别');
      } else if (!this.school) {
        this.$message.error('请输入学校');
      } else {
        
        let data = {
          name: this.name,
          age: this.age,
          sex: this.sex,
          school: this.school
        }

        // 提交mutation
        this.$store.commit("work/setUserInfo", data);

        // 跳转
        this.$router.push({
          name: "userinfo"
        })
      }
    }
  },
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