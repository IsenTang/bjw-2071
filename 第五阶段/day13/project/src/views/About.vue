<template>
  <div class="about">
    <img :src="aboutUserInfo&&aboutUserInfo.avatar" alt="">
    <h1>{{ aboutUserInfo&&aboutUserInfo.nickname }}</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script>
// import { get, post } from "../utils/fetch"
// import { get, post } from "../utils/fetch"
export default {
  name: 'about',
  data () {
    return {
      aboutUserInfo: {}
    }
  },
  created() {
    // this.getUserInfo()
    // this.login();
  },
  methods: {
    async login () {
      let params = {
        username: 'jwjk11',
        password: 'abcabc'
      }
      const data = await this.yPost('/user/login', params)
      console.log('login data', data);
    },
    async getUserInfo () {
      const data = await this.yGet('/user/userinfo', {
        params: {
          id: '5f69cd1b0023164a8b9f3ee3'
        }
      })
      console.log('about data', data);
      if(data) {
        this.aboutUserInfo = data;
      }
    }
  },
}
</script>