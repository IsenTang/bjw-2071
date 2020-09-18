<template>
  <div class="header-container">
    <img :src="imgUrl" alt="">
    <div class="nav-box">
      <div> <router-link to="/">首页</router-link> </div>
      <div> <router-link to="/about">关于我们</router-link> </div>
      <div> <router-link to="/contact">联系我们</router-link> </div>
      <div> <router-link to="/join">加入我们</router-link> </div>
      <div> <router-link to="/club">俱乐部</router-link> </div>
      <div> <router-link to="/club/detail">俱乐部详情</router-link> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      imgUrl: 'https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo.png'
    }
  }
}
</script>

<style scoped lang="scss">
.header-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 80px;
  box-shadow: 0 3px 8px #eeee;
  img{
    width: 200px;
    height: 40px;
  }
  .nav-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    div{
      margin-right: 10px;
      a{
        text-decoration: none;
        font-size: 18px;
        color: #333;
      }
    }
  }
}

</style>