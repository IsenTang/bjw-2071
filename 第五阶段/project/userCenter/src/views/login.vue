<template>
  <div class="regist-container">
    <div class="regist-warpper">
      <div class="regist-left">
        <img v-img-path="'auth/pic_denglu_wode.png'" alt="">
      </div>
      <div class="regist-right">
        <h1>欢迎登录</h1>
        <input type="text" v-model="username" placeholder="请输入您的用户名">
        <input type="password" v-model="password" placeholder="请输入您的密码">
        <div style="font-size: 14px;color: #999;">
          还没有账号？<span @click="jumpPage('regist')" style="color: #6963d0;">新用户注册</span>
        </div>
        <button @click="check">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'userIndexComp',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      user: state => state.login.user
    })
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    check () {
      if(!this.username) {
        this.showMsg('请填写您的用户名');
        return
      }
      if(!this.password) {
        this.showMsg('请输入密码');
        return
      }
      this.login()
    },
    async login () {
      let data = await this.yPost('user/login', {
        username: this.username,
        password: this.password
      })
      if(data&& data.success){
        this.userInfo = data.user;
        this.setUser(data.user); // 存储用户信息
        this.$router.replace({  // 跳转到个人中心
          name: 'user'
        });
      }
    },
    jumpPage(name) {
      this.$router.replace({
        name: name
      })
    },
    // 显示弹框
    showMsg (msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
  },
}
</script>

<style scoped lang="scss">
.regist-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .regist-warpper{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 2px 3px 7px #d8d8d8;
    border-radius: 8px;
    .regist-left{
      width: 500px;
      padding: 40px;
      img{
        width: 100%;
      }
    }
    .regist-right{
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1{
        font-size: 24px;
        color: #333;
        line-height: 60px;
      }
      input {
        width: 300px;
        height: 40px;
        border: solid 1px #eee;
        margin: 15px 0;
        padding: 0 10px;
        border-radius: 4px;
        font-size: 14px;
        color: #333;
      }
      button{
        width: 300px;
        height: 40px;
        border-radius: 6px;
        background: #6963d0;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        margin: 20px 0 0;
      }
    }
  }
}
</style>