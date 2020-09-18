<template>
  <div>
    <my-header v-if="configObj.isShowHeader"></my-header>
    <transition name="fade">
      <router-view class="app-main"/>
    </transition>
    <my-footer v-if="configObj.isShowFooter"></my-footer>
    
  </div>
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"

export default {
  name: 'AppName',
  components: { 'my-header':Header, 'my-footer':Footer },
  data () {
    return {
      configObj: {
        title: '半圆官网',
        isShowHeader: true,
        isShowFooter: true,
      }
    }
  },
  watch: {
    "$route": {
      handler (newV, oldV) {
        let meta = newV && newV.meta
        const defaultConfig = {
          title: '半圆官网',
          isShowHeader: true,
          isShowFooter: true,
        }
        this.configObj = Object.assign(defaultConfig, meta)
        console.log('configObj', this.configObj)
        // console.log('meta', newV.meta);
        // document.title = newV.meta.title || '半圆官网';
        // let isShow = newV.meta.isShowHeader
        // if( typeof isShow === 'boolean'){
        //   this.showHeader = isShow
        // } else {
        //   this.showHeader = true;
        // }

        // let isShowF = newV.meta.isShowFooter
        // if(typeof isShowF === 'boolean'){
        //   this.showFooter = isShowF
        // } else {
        //   this.showFooter = true;
        // }

        // if(newV.meta&&newV.meta.isShowHeader){
        //   this.showHeader= true;
        // } else {
        //   this.showHeader= false;
        // }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.app-main{
  min-height: 200px;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity 1s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
