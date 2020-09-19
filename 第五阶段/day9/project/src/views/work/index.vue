<template>
  <div>
    <div class="aside">
      <div :style="{background: routeName==='myclass'?'red':'none'}"> <router-link to="/work/myclass">我的课程</router-link> </div>
      <div :style="{background: routeName==='setting'?'red':'none'}"> <router-link to="/work/setting">设置</router-link> </div>
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
      name: this.$route.name
    }
  },
  computed: {
    routeName () {
      let name = this.$route.name;
      return name
    }
  },
}
</script>

<style lang="scss">
.aside{
  width: 280px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(50, 50, 50);
  div{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    a{
      text-decoration: none;
      color: #fff;
    }
  }
}
.right{
  padding-left: 280px;
  // position: fixed;
  // left: 280px;
  // right: 0;
  // top: 0;
  // bottom: 0;

}
</style>