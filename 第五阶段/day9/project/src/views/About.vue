<template>
  <div class="about">
    <h1 @click="jump">This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'about page'
    }
  },
  created() {
    const params = this.$route.params;
    console.log('created', params);
  },
  beforeRouteEnter (to, from, next) {
    console.log('守卫：beforeRouteEnter')
    next();
  },
  beforeRouteUpdate (to, from, next) {
    console.log('守卫：beforeRouteUpdate')
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /about/1 和 /about/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    console.log('守卫：beforeRouteLeave')
    console.log("this", this);
    next()
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  methods: {
    jump () {
      this.$router.push({
        path: '/about/765'
      })
    }
  },
}
</script>