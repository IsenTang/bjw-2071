# this



在调用函数时候，每次都会向函数内部传递一个隐含的参数（this）。

我们称之为，函数执行的上下文对象。

根据函数调用的方式的不同，this会指向不同的对象。（和创建方式无关）

```javascript
function sayThis(){
  
  console.log(this);
}

function sayName(){
  
  console.log(this.name);
}

var obj = {
  name:'banyuan',
  sayThis:sayThis
}
```

