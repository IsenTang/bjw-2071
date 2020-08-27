# call apply bind

### 思考：

我们已经学习了this，那么为什么需要设计这么个this？

```js
// 需求： 一个对象，有一个属性name，一个方法sayName,打印出hello,I am 属性name

var person = {
  name:'isen',
  sayName: function(name){
    console.log('hello,I am '+ name );
  }
}

person.sayName(person.name);

var person = {
  name:'isen',
  sayName: function(self){
    console.log('hello,I am '+ self.name );
  }
}

person.sayName(person);

// 加糖（语法糖），如果想要调用方式为person.sayName(),代表着函数没有实参

// 方法1: 依然把第一个参数当作person，这样形参会永远比实参多出一个self
// 方法2: 隐藏self，然后使用关键字this来访问

// js选择了方法2，二python选择了方法1
var person = {
  name:'isen',
  sayName: function(){
    console.log('hello,I am '+ this.name );
  }
}

// 对于方法2而言，person.sayName()中，this就是person。
```



### call apply bind 是什么？

本质就是改变this的指向。

- call : function.call(this,参数1，参数2)，第一个参数为function运行时制定的this值，若不传默认为undefined或者null
- apply : 与call方法相似,function.apply(this, [argsArray]),与call方法的区别是在于提供参数的方式，apply 使用参数数组而不是一组参数列表
- bind : bind方法与apply方法，call方法的区别是call和apply都是改变上下文中的this并立即执行这个函数，bind方法新创建一个函数，然后把它的上下文绑定到bind()括号中的参数上，然后将它返回,可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加

```js
var person = {
  name : 'isen',
  sayName: function (){
    console.log(this.name);
  }
}

var person2 = {
  name : 'Tom'
}

person.sayName.call(person2);

person.sayName.apply(person2);

person.sayName.bind(person2)();
```

