# lodash



Lodash是一个著名的javascript原生库，不需要引入其他第三方依赖。是一个工具库。https://lodash.com/docs/4.17.15

### 安装：

```shell
　npm i lodash --save
```



### 使用：

```js
const _ = require('lodash');
```



#### Array：

```js
// findIndex
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });

_.findIndex(users, { 'user': 'fred', 'active': false });


// indexOf
_.indexOf([1, 2, 1, 2], 2);

// join
_.join(['a','b','c'],'@')


// removed
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]


// reverse
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]


// nth
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';

```



#### Collection:

```js
// forEach
_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});


// filter
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
_.filter(users, function(o) { return o.age === 40; });

_.filter(users, { 'age': 36, 'active': true });


// groupBy
const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'isen',   'age': 28, 'active': false }
];

console.log(_.groupBy(users,'age'))

// map
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
_.map(users, 'user');


//sortBy
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]


// orderBy 可以指定排列顺序
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 

_.orderBy(users, ['user', 'age'], ['asc', 'desc']);

```



#### 其他一些常用方法：

```js
_.isArray([]);

_.isBoolean(false);

_.isEmpty(null);

_.isNull();

_.isNaN();

_.isNumber()

// isEqual
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
object === other;
// => false

_.random(0,10,true)


// omit 去除属性
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
```



链式调用：

```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
 
var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();

// 练习
let users = [
    {
        name:'tom',
        score:80,
        class:'A'
    },
    {
        name:'lucy',
        score:90,
        class:'A'
    },
    {
        name:'nacy',
        score:83,
        class:'B'
    },
    {
        name:'jack',
        score:84,
        class:'A'
    },{
        name:'lily',
        score:91,
        class:'A'
    }
]

// 最后得到
// A班所有学生的分数由大到小排列，去除class属性
[
  { name: 'lily', score: 91 },
  { name: 'lucy', score: 90 },
  { name: 'jack', score: 84 },
  { name: 'tom', score: 80 }
]


```



链式调用的原理：

```js
function Chain(data){


  this.data = data;

  this.push = function(v){

    this.data.push(v)
    return this;
  }

  this.pull = function(v){

    this.data.unshift(v)
    return this;
  }

  this.value = function(){

    return this.data;
  }
}

let c1 = new Chain([])

console.log(c1.push(1).pull(2).value())
```

