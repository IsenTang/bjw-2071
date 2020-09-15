<template>
  <div>
    <div class="slide-container">
      <img :src="url" class="avatar" alt="">

      <div class="top-slide">
        <div class="item-slide" :style="{background: activeComp=='MyClass'?'red':'none'}" @click="clickFun('MyClass')">我的课程</div>
        <div class="item-slide" :style="{background: activeComp=='Email'?'red':''}" @click="clickFun('Email')">邮箱</div>
      </div>

      <div class="bottom-slide">
        <div class="item-slide" :style="{background: activeComp=='Setting'?'red':''}" @click="clickFun('Setting')">设置</div>
        <div class="item-slide">退出</div>
      </div>
    </div>

    <div class="right-container">
      <component :is="activeComp"></component>
    </div>


  </div>
</template>

<script>
import MyClass from "./myClass"
import Email from "./email"
import Setting from "./setting"
export default {
  name: 'work',
  components: {
    MyClass, Email, Setting
  },
  data () {
    return {
      activeComp: 'MyClass',
      url: 'https://by-image.oss-cn-shanghai.aliyuncs.com/images/159169228111094950.jpg'
    }
  },
  methods: {
    clickFun (name) {
      this.activeComp = name;
      console.log('ssss', this.activeComp)
    }
  }
}
</script>

<style>
.slide-container{
  width: 260px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
}

.avatar{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 100px 0 0;
}

.top-slide{


}

.bottom-slide{
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
}

.item-slide{
    font-size: 18px;
    color: #fff;
    height: 40px;
    line-height: 40px;
}

.item-slide:hover{
  background: pink;
}

.right-container{
  width: 100%;
  height: 800px;
  padding-left: 260px;
}
</style>