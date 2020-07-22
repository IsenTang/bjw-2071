# while



循环语句：

### 语法：

```js
// 如果表达式是true则执行循环体，如果为false，则终止循环。
while(条件表达式){
	// ...
}

// 死循环，除非浏览器关闭，否则循环不会停止。
var n = 0;
while(true){
  console.log(n++);
  
  if(n === 10){
    break;
  } 
}

var i = 0;
while(i < 10){
  i++;
  console.log(i);
}
```





### do...while:

先执行，后判断。

```js
var i = 0;

do{
  i++;
  console.log('do ===>',i);
}while(i <= 10)
```



### tips：

```js
// 浏览器会卡死
while(true){
  document.write('hello');
}
```



### 练习：

```js
//复利练习
// 多少年存满100w
function main(){

    var target = 1000000;
    var money = 10000;
    var year = 0;

    while( money <= target ){
        year++
        money = money * 1.1;
    }

    return year;
}

console.log(main());
```

