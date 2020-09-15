<template>
  <div class="hello">
    <img alt="Vue logo" class="img2" src="../assets/logo.png" />
    <h1 class="hhh1">{{ msg }}</h1>
    <p class="ppp">
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a class="a1" href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation
        <span>span</span>
        </a>
      <a class="a2" href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>
      <a class="a3" href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>
      <a class="a4" href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>
      <a class="a5" href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>
    </p>
    <br>
    <div class="box">
      <h2>标题</h2>
      <div class="info1">
          <input type="text" />
          <p>没class的p</p>
          <p class="font">有class的p</p>
      </div>
      <div class="info2">
          <img src="path" />
      </div>
    </div>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(../style/style.less);
@hjs: #f97197;
@opa: 0.5;
@font-color: #f97197;

.hhh1{
  font-size: 20px;
  color: @hjs;
  opacity: @opa;
}

.ppp{
  font-size: 14px;
  .a1{
    color: red;
    span{
      color: #333;
    }
  }
  .a2{
    color: blue;
  }
  .a3{
    color: sienna;
  }
  .a4{
    color: purple;
  }
  .a5{
    color: gold;
  }
}

.box{
  background: #f3f3f3;
  width: 200px+200px;
  height: 500px-200;
  border-width: 2*2px;
  border-style: solid;
  border-color: @font-color;
  box-shadow: 0 2/2px 10px #000;
  h2{
    font-size: 20px;
    color: #f97197;
    color: lighten(@font-color, 10%);
  }
  .info1{
    input{}
    .font{
      font-weight: bold;
      color: red;
    }
    p{
      font-size: 30px;
      color: springgreen;
    }
  }
  .info2{
    img{}
  }
}
</style>
