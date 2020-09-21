<template>
  <div class="home">
    <h1>home模块的count：{{ $store.state.home.count }}</h1>
    <h1>login模块的count：{{ $store.state.login.count }}</h1>
    <h1>login模块的getters：{{ $store.getters["login/strCount"] }}</h1>
    <button @click="add">增加</button>
    <br>
    <br>
    <button @click="add2">增加100</button>
    <br>
    <br>
    <button @click="add3">actions=>增加1000</button>
    <br>
    <button @click="updateLoginAction">login--actions=>增加1000</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data () {
    return {
      homeName: 'home',
      input: 'value1111'
    }
  },
  components: {
    HelloWorld
  },
  created() {
    console.log('vuex', this.$store);
  },
  methods: {
    // 正常方式 调用mutations
    add() {
      this.$store.commit('login/addCount');
    },
    // type方式调用mutations，传对象，以type绑定方法名
    add2() {
      this.$store.commit({
        type: "home/addCount2",
        count: 100
      })
    },
    add3 () {
      this.$store.dispatch('addCount3', 1000);
    },
    updateLoginAction() {
      this.$store.dispatch('login/updateACtion')
    }
  },
};
</script>
