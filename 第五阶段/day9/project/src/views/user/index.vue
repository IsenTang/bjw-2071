<template>
  <div class="home">
    <div class="left-slide">
      <ul>
        <li> <router-link to="/user/myclass">我的课程</router-link> </li>
        <li> <router-link to="/user/setting">设置</router-link> </li>
      </ul>
    </div>
    <div class="right-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    
  },
};
</script>

<style lang="scss">
.left-slide{
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(58, 58, 58);
  ul{
    li{
      line-height: 50px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      list-style: none;
    }
  }
}
.right-main{
  position: fixed;
  left: 300px;
  top: 0;
  bottom: 0;
  right: 0;
}
  
</style>