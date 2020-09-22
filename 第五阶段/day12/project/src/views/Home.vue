<template>
  <div class="home">
    <h2>是否登录{{ isLogin }}</h2>
    <h2>小鲜肉：{{ list }}</h2>
    <button @click="fun">更新登录状态</button>

    <div>
      <ul>
        <li>{{ user.name }}</li>
        <li>{{ user.age }}</li>
        <li>{{ user.sex }}</li>
        <li>{{ user.school }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
export default {
  name: "Home",
  computed: {
    ...mapState({
      "isLogin": state => state.isLogin,
      "list": state => state.list,
      "user": state => state.user
    })
  },
  methods: {
    // ...mapMutations([
    //   'updateLogin', 'updateList'
    // ]),
    ...mapActions([
      'updateLoginState'
    ]),
    fun() {
    //   this.updateList(list);
      this.updateLoginState(true);
    }
  },
};
</script>
