<template>
  <div class="hello">
    <button @click="fun('猫')">我是猫</button>
    <button @click="fun('狗')">我是狗</button>
    <button @click="fun('老鼠')">我是老鼠</button>
    <h2>vue组件</h2>
    <h3>{{ vueName }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  data() {
    return {
      vueName: "vue"
    };
  },
  methods: {
    fun(name) {
      this.vueName = name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
