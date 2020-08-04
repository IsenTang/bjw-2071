# es6语法

### 什么是es6:

ECMAScript，还记得么？

（European Computer Manufacturers Association）

是一个标准，所有浏览器开发商都要按照它制定的标准来开发浏览器，同理，开发者也需要按照他的标准来编程。

es6是ECMA在2015年通过的新标准，从这个时间点来看并不是最新的，但是确实使用的最多的，是一个大的更新。



### 其中的一些语法：

1. let / const   / var

```js
// let const var 
// 都是用来声明变量，区别在于：

// 1. 块级别作用域
{
  var a = 1;
  let b = 1;
}

console.log(a);
console.log(b);

let array = [];

for(var i = 0;i<10;i++){ //let 呢？

    array[i] = function(){

        console.log(i);
    }
}

array[2]();

// 2. 不存在变量声明提前
console.log(a);
var a = 1;

console.log(b);
let b = 1;

// 3. 暂时性死区
let tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

// 4. 不允许重复声明
let a = 1;

let a = 10;

console.log(a);


// const 不准改变
const a = 1;

a = 2;
// 值得注意的是，const的本质并不是变量的值不动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量，但对于复合型的数据，变量指向的内存地址只是一个指向实际数据的指针。所以使用的时候，要注意。
const a = {};
a.test = 1;
console.log(a);

```

我们看一看，for循环里面真实的样子，这里介绍下什么是Babel。

Babel是一个polyfills的库，主要将es6转换为es5（ES5 和 ECMAScript 2009）的代码，让旧浏览器能够识别

```shell
npm install --global babel-cli 

npm install --save babel-preset-es2015
```

```json
{
  "presets": [
      "es2015"
   ]
}
```

```shell
babel xxxx.js --out-file compiled.js
```



2. 解构赋值 （Destructuring）

```js
let a = 1;
let b = 2;
let c = 3;

let [a, b, c] = [1, 2, 3];

console.log(a);

// 简单来说，这种写法属于‘模式匹配’
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];

// 不完全解构
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

// 解构函数的默认值
let [foo = true] = [];
foo // true

//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

let [x, y = 'b'] = ['a', undefined]; 
// x='a', y='b'


let [x = 1] = [null];
x // null


// 说完数组，我们来说说对象
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// 如果没有的话
let {foo} = {bar: 'baz'};
foo // undefined
	
// 改名
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

// 默认值
let {x = 3} = {};
x // 3

let {x, y = 5} = {x: 1};
x // 1
y // 5
```

3. 箭头函数

   ```js
   // 什么叫箭头函数（arrow function）
   
   let func  = function(x){
   
       return x*x;
   }
   
   
   console.log(func(2));
   
   // 和上面的相等。
   let func = x => x*x;
   
   // 和解构一起的话
   let func = ({ value , num }) => ( { total:value* num } ) // 注意，返回的是一个对象，如果返回的是对象，则需要加一个括号，否则会和函数的{}冲突
   
   // 俩者相等
   let func = ({ value , num }) => {
       
       return { total:value* num }
   }
   
   // 注意，箭头函数不仅仅是简写
   
   var obj = {
       birth: 1990,
       getAge: function () {
           var b = this.birth; // 1990
           var fn = function () { // 如果改成箭头函数呢？
   
               return new Date().getFullYear() - this.birth; 
           };
           return fn();
       }
   };
   
   console.log(obj.getAge());
   ```

4. 模版字符串:

   ```js
   let name = 'isen';
   let str = 'I am ' + name;
   
   let str = `I am ${name}`;
   ```

5. Map/Set

   ```js
   //ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
   
   // 通过add来添加成员
   let s = new Set();
   [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
   
   console.log(s);
   
   console.log(s.has(2))
   
   let map = new Map();
   let obj = {
     a:1
   }
   
   map.set(obj,'1234');
   console.log(map.get(obj));
   map.has(obj);
   map.delete(obj);
   ```

6. for of 循环

   ```js
   const numbers = [1,2,2,3];
   
   for (let i = 0; i < numbers.length; i++) {
       console.log(numbers[i]);
   }
   
   for(let num of numbers){
       console.log(num);
     
     	if(num === 2){
         break;
       }
   }
   
   let s = new Set();
   [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
   
   for(let item of s){
   
       console.log(item);
   }
   
   ```

7. Array.map();

   ```js
   let array = [{a:1},{a:2}]
   
   // map，返回一个新生成的数组
   array.map((item,index)=>{
     console.log(index);
     console.log(item);
   })
   ```

   