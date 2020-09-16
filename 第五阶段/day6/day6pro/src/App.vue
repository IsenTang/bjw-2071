<template>
  <div style="text-align: center; position: relative;">
    <h1>{{ message }}</h1>
    <Work></Work>
    <!--<div>
      <button @click="change('HelloWorld')">btn1</button>
      <button @click="change('HelloVue')">btn2</button>
      <button @click="change('HelloJs')">btn3</button>
    </div>-->

    <!-- <hello-world v-if="activeComp === 'HelloWorld'"></hello-world>
    <hello-vue v-else-if="activeComp === 'HelloVue'"></hello-vue>
    <hello-js v-else></hello-js> -->

    <!--<keep-alive>
      <component :is="activeComp"></component>
    </keep-alive>-->

    <!-- <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter">
      <p v-if="isShow" class="font2">js过渡</p>
    </transition> -->
    <!-- <transition name="fade">
      <p v-if="isShow" class="font">过渡效果</p>
    </transition>-->
  </div>
</template>
<script>
import myMixin from "./mixins/common";
// import Velocity from "velocity-animate"
import Work from "./components/work"
import HelloWorld from "./components/HelloWorld";
import HelloVue from "./components/HelloVue";
import HelloJs from "./components/HelloJs";
export default {
  name: "App",
  mixins: [myMixin],
  components: { HelloWorld, HelloVue, HelloJs, Work },
  data() {
    return {
      isShow: false,
      a: "aaa",
      activeComp: 'HelloWorld'
    };
  },
  methods: {
    click1() {
      console.log("mixin message", this.message);
    },
    change(name) {
      this.activeComp = name;
    }
    // beforeEnter(el) {
    //   el.style.opacity = 0;
    //   el.style.color = "#f97197";
    // },
    // enter(el, done) {
    //   Velocity(el, { opacity: 1, color: "#333333" }, { duration: 1000 });
    //   done();
    // }
  }
};
</script>
<style>
.font{
  font-size: 14px;
  color: blue;
}
.fade-enter{
  opacity: 0;
  color: red;
  transform: rotateY(90deg);
}
.fade-enter-active{
  transition: all 3s;
}
.fade-enter-to{
  opacity: 1;
  color: blue;
  transform: rotateY(0deg);
}
.fade-leave{
  font-size: 14px;
  color: blue;
}
.fade-leave-active{
  transition: all 3s;
}
.fade-leave-to{
  opacity: 0;
  font-size: 30px;
  color: yellowgreen;
}
@keyframes big-small {
  0% {
    font-size: 30px;
  }
  25% {
    font-size: 14px;
  }
  50% {
    font-size: 30px;
  }
  75% {
    font-size: 14px;
  }
  100% {
    font-size: 30px;
  }
}
</style>
