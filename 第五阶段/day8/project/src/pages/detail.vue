<template>
  <div class="detail-container">
    <div :class="['left', showSlide?'show-left':'hidden-left']" >
      <div @click="goback">返回</div>
      <div @click="showw('title')">标题</div>
      <div @click="showw('summary')">描述</div>
    </div>
    <div :class="['right', showSlide? 'left-240':'left-0']" >
      <div class="right-top">
        <button @click="showSlide = !showSlide">show</button>
      </div>
      <div class="right-main">
        <div v-if="showTab==='title'">{{ info.title }}</div>
        <div v-else>{{ info.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workDetail',
  data () {
    return {
      showTab: 'title',  // summary
      info: {},
      showSlide: false
    }
  },
  created() {
    const query = this.$route.query;
    const data = JSON.parse(query.data);
    console.log('data', data)
    this.info = data;
  },
  methods: {
    goback () {
      this.$router.go(-1);
    },
    showw (name) {
      this.showTab = name;
    }
  },
}
</script>

<style lang="scss">
.detail-container{
  .left{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rebeccapurple;
    overflow: hidden;
    div{
      font-size: 20px;
      color: #fff;
      line-height: 50px;
      text-align: center;
    }
  }
  .show-left{
    width: 240px;
  }
  .hidden-left{
    width: 0px;
  }
  .right{
    position: fixed;
    // left: 240px;
    right: 0;
    top: 0;
    bottom: 0;
    border-top: solid 10px #3d3d3d;
    border-left: solid 10px #3d3d3d;
    border-right: solid 11px #3d3d3d;
    &-top{
      color: red;
    }
  }
  .left-240{
    left: 240px;
  }
  .left-0{
    left: 0px;
  }
}
</style>