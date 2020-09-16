<template>
  <div>
    <h1>首页</h1>
    <button @click="jumpAbout">跳转关于我们params</button>
    <br>
    <button @click="jumpAbout2">跳转关于我们query</button>
    <br>
    <button @click="jumpToUser">调到user</button>
    <div>
      <input type="text" v-model="input1">
      <button @click="goRemove">后退</button>
    </div>

    <div>
      <input type="text" v-model="input2">
      <button @click="goPush">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      input1: -1,
      input2: 1,
    }
  },
  methods: {
    jumpAbout() {
      this.$router.push({
        // path: '/about'
        name: 'about',
        params: {
          a: '///',
          id: 34,
          b: {
            name: 'b',
            id: 23
          }
        }
      })
    },
    jumpAbout2 () {
      this.$router.push({
        name: 'about',
        params: {
          name: '大乱斗',
          id: 2,
          // list: JSON.stringify({
          //   name: 'list',
          //   qu: '234'
          // })
        }
      })
    },
    jumpToUser () {
      this.$router.push({
        path: '/user/2/abc/45'
      })
    },
    goRemove () {
      this.$router.go(this.input1)
    },
    goPush () {
      this.$router.go(this.input2)
    }
  },
}
</script>

<style lang="scss">
  
</style>