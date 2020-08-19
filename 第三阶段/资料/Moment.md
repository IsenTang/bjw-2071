# Moment

### 安装：

```shell
npm i moment --save
```



### 使用：

```js
const moment = require('moment');

console.log(moment());
```



#### moment的初始化：

```js
moment() // 当前时间

moment("1992-01-20")

moment(new Date(1992, 1, 20))
```



#### moment的时间格式化：

```js
let date = moment().format('YYYY-MM-DD');
```



| 格式代码 | 说明                       | 返回值例子                 |
| :------- | :------------------------- | :------------------------- |
| M        | 数字表示的月份，没有前导零 | 1到12                      |
| MM       | 数字表示的月份，有前导零   | 01到12                     |
| MMM      | 三个字母缩写表示的月份     | Jan到Dec                   |
| MMMM     | 月份，完整的文本格式       | January到December          |
| Q        | 季度                       | 1到4                       |
| D        | 月份中的第几天，没有前导零 | 1到31                      |
| DD       | 月份中的第几天，有前导零   | 01到31                     |
| d        | 星期中的第几天，数字表示   | 0到6，0表示周日，6表示周六 |
| ddd      | 三个字母表示星期中的第几天 | Sun到Sat                   |
| dddd     | 星期几，完整的星期文本     | 从Sunday到Saturday         |
| w        | 年份中的第几周             | 如42：表示第42周           |
| YYYY     | 四位数字完整表示的年份     | 如：2014 或 2000           |
| YY       | 两位数字表示的年份         | 如：14 或 98               |
| A        | 大写的AM PM                | AM PM                      |
| a        | 小写的am pm                | am pm                      |
| HH       | 小时，24小时制，有前导零   | 00到23                     |
| H        | 小时，24小时制，无前导零   | 0到23                      |
| hh       | 小时，12小时制，有前导零   | 00到12                     |
| h        | 小时，12小时制，无前导零   | 0到12                      |
| m        | 没有前导零的分钟数         | 0到59                      |
| mm       | 有前导零的分钟数           | 00到59                     |
| s        | 没有前导零的秒数           | 1到59                      |
| ss       | 有前导零的秒数             | 01到59                     |
| X        | Unix时间戳                 | 1411572969                 |





#### moment的时间操作：

```js
// 7天前
let date = moment().subtract(7,'days').format('YYYY年MM月DD日');

// 7天后
let date = moment().add(7,'days').format('YYYY年MM月DD日');

// 年，月，日，时，分，秒。。。

// 获取年，月，日，时，分，秒
let date = moment().add(1,'hour').hour()

let date = moment().add(1,'hour').mouth()

let date = moment().add(1,'hour').year()

let date = moment().add(1,'hour').date()

 moment().daysInMonth() // 当前月有多少天
```



#### moment比较：

```js
console.log(moment('2010-10-20').isBefore('2010-10-21'))

moment('2010-10-20').isBefore('2010-12-31', 'year') 

moment('2010-10-20').isAfter('2010-12-31', 'year') 

moment().isLeapYear()  // ==>是否是闰年

// diff 计算两者的间隔
console.log(moment('1992-01-20').diff(moment(),'seconds'))
```



#### moment转换：

```js
let date = moment().toDate(); // ===> 转换成Date对象
```

