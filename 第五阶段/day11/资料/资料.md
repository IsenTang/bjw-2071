





* 什么是vuex

```
Vuex 是一套基于Vue的状态管理工具，（可把vuex看做全局变量）
```







* vuex解决什么问题

```
* 能够解决非父子组件的消息传递
		:value="value"    props:[]
    父给子可用props，跳转页面时可用 params 或 query 等传参，但不跳转页面又不是父子组件的关系时，即可用vuex实现数据同步
    
    data() { return { count }}
    fun() {
    	this.count
    }
    
    
    state: {}
    mutations: { fun1, fun2 }
    actions: 


* 减少请求
   当几个页面都需要展示用户信息时，比如头像、用户名。可把用户数据存放在vuex中，其他页面不需要重复请求接口，直接从vuex中取数据
```







* 什么情况下适合用vuex

```
中大型项目，有很多页面间复杂传值，

小型项目不建议使用Vuex，用了反而会比较繁琐冗余。而中大型单页应用，可能有很多复杂数据传递等，以及很多全局状态需要管理，这时比较适合使用vuex


vuex让我们很容易实现数据的共享、如果没有vuex、页面间复杂数据关联，或者用户做了一些加减的操作、多个页面都要用到时、可以用传参、但是很麻烦、这种时候用vuex就方便简单一些
```









* Vuex 的缺点

```
浏览器刷新，数据会重置，
可使用插件，可配合 localStorage
```









* vuex 的几个属性

```
state: 单一状态数  =>  全局状态数据提交更新数据的方法，
getters: 基本数据派生的数据  =>  相当于state的计算属性
mutations: 提交更新数据的方法 => 同步
actions: 提交mutation更新操作 => 异步
modules: 模块化  =>  项目越来越大时，可按业务分模块进行管理
```







* state

```
state: {
   count: 0,
   list: []
},
```







* Getters

```
state: {
   list: [
      { title: "火龙果", price: 100 },
      { title: "榴莲", price: 500 },
      { title: "西瓜", price: 1000 },
      { title: "香瓜", price: 2000 }
   ]
}


定义: 
getters: {
   showList(state) {
      return state.list.filter(item => {
         return item.price > 900;
      });
   }
}

调用: 
this.$store.getters.showList
```







* mutations（更改 Vuex 的 store 中的状态的唯一方法）(设置strict严格模式时，mutation做异步操作会警告)

```
定义: 
adddCount(state, value) {
   state.count += value;
}

调用: this.$store.commit("adddCount", 3);




type提交方式
定义: 
adddCount(state, value) {
   state.count += value.count;
}

调用: 
this.$store.commit({
   type: "adddCount",
   count: 3
});
```







* Actions

```
定义: 
action1(store) {
   store.commit("adddCount", 2);
}

调用: 
this.$store.dispatch("action1");
```







* modules

state 重名可按 `this.$store.state.login.count` 分模块取值，但模块内部的 action、mutation 和 getter 是注册在全局命名空间的



* namespaced: true
	可加namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。



* 加上 `namespaced: true` 后调用时按生成的模块名调用

	* getters

		```
		$store.getters["login/showList"]
		```

		

	* mutations

		```
		this.$store.commit("login/adddCount", 10);
		```

	

	* actions

		```
		this.$store.dispatch("login/action1", 2000);
		```



