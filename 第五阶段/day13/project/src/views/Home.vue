<template>
  <div class="home">
    <div>
      <h1>个人信息</h1>
      <img :src="myUserInfo.avatar" alt="">
      <h3>{{ myUserInfo.nickname }}</h3>
    </div>
    <div v-for="item in list" :key="item._id">
      <div style="margin-bottom: 30px;border-bottom: solid 2px #f3f3f3;">
        <img :src="item.image" style="width: 100px;" alt="">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios"
export default {
  name: "Home",
  data () {
    return {
      list: [],
      myUserInfo: {}
    }
  },
  components: {
    HelloWorld
  },
  created() {
    this.getShopList();
    // this.getUserInfo();
    // this.login();
    
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: 'http://49.235.98.65:3000/user/login',
        data: {
          username: 'jwjk11',
          password: 'alalal'
        }
      }).then( res => {
        console.log('login res==>', res.data.user);
        this.myUserInfo = res.data.user;
      }).catch( error => {
        console.log('login error==>', error);
      })
    },
    getShopList() {
      axios.get('http://49.235.98.65:3000/shop/shopList').then(response => {
        console.log(response);
        this.list = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getUserInfo() {
      axios({
        url: `http://49.235.98.65:3000/user/userinfo`,
        headers: {'user': userid},
        params: {
          id: '5f69cd1b0023164a8b9f3ee3'
        },
      }).then(response => {
        console.log('1', response);
        this.myUserInfo = response.data;
      })
      .catch(function (error) {
        console.log('2', error);
      });
      // axios.get(`http://49.235.98.65:3000/user/userinfo?id=${userid}`).then(response => {
      //   console.log('1', response);
      //   // this.list = response.data;
      // })
      // .catch(function (error) {
      //   console.log('2', error);
      // });
    }
  },


};
</script>
