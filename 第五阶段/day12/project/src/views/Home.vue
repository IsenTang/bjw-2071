<template>
  <div class="home">
    <h2>是否登录{{ isLogin }}</h2>
    <h2>小鲜肉：{{ list }}</h2>
    <button @click="fun">更新登录状态</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"
export default {
  name: "Home",
  computed: {
    ...mapState({
      "isLogin": state => state.isLogin,
      "list": state => state.list
    })
  },
  methods: {
    ...mapMutations([
      'updateLogin', 'updateList'
    ]),
    fun() {
      let list = [ { name: '赵丽颖' }, { name: '杨幂' },
        { name: '迪丽热巴' }, { name: '古力娜扎' }]
      this.updateList(list);
    }
  },
};
</script>
