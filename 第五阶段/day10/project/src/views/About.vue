<template>
  <div class="about">
    <h1>关于我们</h1>
    <button @click="controllarModel(true)">查看公司信息</button>

    <div v-if="isShow" class="model">
      <div class="model-main">
        <span @click="controllarModel(false)">×</span>
        <h2>简介之类的</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    controllarModel (bool) {
      this.isShow = bool;
    }
  },
}
</script>

<style lang="scss">
.model{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  &-main{
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    span{
      position: absolute;
      right: 0;
      top: 0;
      font-size: 20px;
    }
  }
}
</style>