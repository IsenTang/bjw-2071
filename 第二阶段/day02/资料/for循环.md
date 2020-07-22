# for循环

语法：

```js
// for ( 初始化表达式，条件表达式，更新表达式) 

for(var i = 0; i< 10 ; i++){
  console.log(i);
}

// for 循环的执行流程：
// 执行初始化表达式，初始化变量
// 执行条件表达式，判断是否执行循环--》 true，执行循环，false，终止循环
// 执行更新表达式，执行完毕，继续执行条件表达式

//tips：
// for循环中的三部分，都是可以省略的，可以写在外部
var i = 0;
for(;i<10;){
  console.log(i++);
}

//死循环，尽量不用.
for(;;){
  console.log(1);
}

//break;continue
// break 退出switch循环语句
// 退出for语句循环
for(var i = 0 ; i < 10; i++){
  
    console.log(i);
    if(i > 5){
      break;
    }
}

//  只对最近的循环语句起效
for (let i = 0; i < 10; i++) {
    
    console.log('i===>',i);
    for(let j = 0; j< 10; j++){

        console.log('j ===>',j);
        if(j>5){
            break;
        }
    }
}

// 使用break，终止指定的循环
outer : for (let i = 0; i < 10; i++) {
    
    console.log('i===>',i);
    for(let j = 0; j< 10; j++){

        console.log('j ===>',j);
        if(j>5){
            break outer;
        }
    }
}

// continue跳过当次循环
for (let i = 0; i < 10; i++) {
    
    if(i>2){
        continue;
    };

    console.log(i);
}
```



### 练习：

```js
// 获取0～100之间，所有的奇数之和
var sum = 0;
for(var i = 1; i<=100;i++){

    if(i%2 != 0){
        sum += i;
    }
}

console.log(sum);

//水仙花数 153 1^3 + 5^3 + 3^3 = 153
for(var i = 100; i<1000;i++){

    var b = Number(String(i).charAt(0));

    var s = Number(String(i).charAt(1));

    var g = Number(String(i).charAt(2));

    if(Math.pow(b,3)+Math.pow(s,3)+Math.pow(g,3) === (b*100 + s*10 + g)){

        console.log(b*100 + s*10 + g);
    }
}

// 反转字符串
var name = "we are banyuan education";
var nameArr = name.split('');
var resultStr = '';
for (var i = nameArr.length-1; i >= 0; i--) {
    resultStr += name.charAt(i);
}
console.log(resultStr);

// 完成99乘法表
```

