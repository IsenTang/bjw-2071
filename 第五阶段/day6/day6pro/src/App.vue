<template>
  <div style="text-align: center; position: relative;">
    <button @click="click1">btn1</button>
  </div>
</template>

<script>
import Common from "./mixins/common";
export default {
  name: "App",
  mixins: [Common.myMixin],
  data() {
    return {
      a: "aaa",
      message: "我是父组件的数据"
    };
  },
  methods: {
    click1() {
      console.log("mixin message", this.message);
      this.sayHello();
    }
  }
};
</script>
