# DOM事件流

浏览器在为当前页面与用户做交互的过程中，比如点击鼠标左键，会出现这个左键是怎么传到页面上，还有怎么响应的问题。

事件流所描述的就是从页面中接受事件的顺序，事件流分为两种：事件冒泡（主流）和事件捕获

有意思的事情是，当时的两家公司 ( IE, Netscape )面对同一个需求，却产生了2种完全不同的想法。

- 事件捕获
- 事件冒泡



### 事件捕获：

event capturing： 通俗的理解就是，当鼠标点击或者触发dom事件时，浏览器会从根节点开始**由外到内**进行事件传播，即点击了子元素，如果父元素通过事件捕获方式注册了对应的事件的话，会先触发父元素绑定的事件。



### 事件冒泡：

Event bubbling： 与事件捕获恰恰相反，事件冒泡顺序是**由内到外**进行事件传播，直到根节点。

![捕获](/Users/touitsuchou/Documents/workspace/banyuan/课件/前端/img/捕获.png)

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="div1">
        <button id="btn">按钮</button>
    </div>
<script>
    var btn = document.getElementById("btn");
    var div1 = document.getElementById("div1");
		
  	//事件冒泡
     btn.onclick = function(){
        console.log("冒泡1.Click btn");
    }
  
    div1.onclick = function(){
        console.log("冒泡1.5 Click div1");
    }
  
    document.body.onclick = function(){
        console.log("冒泡2.Click Body");
    }
  
    document.onclick = function(){
        console.log("冒泡3.Click document");
    }
  
    window.onclick = function(){
        console.log("冒泡4.Click window");
    }

    //事件捕获
    window.addEventListener("click",function(){
        console.log("捕获4.Click window");
        event.stopPropagation();
    },true);
  
    document.addEventListener("click",function(){
        console.log("捕获3.Click document");
    },true);
  
    document.body.addEventListener("click",function(){
        console.log("捕获2.Click body");
    },true);
  
    div1.addEventListener("click",function(){
        console.log("捕获1.5 Click div1");
    },true);
  
    btn.addEventListener("click",function(){
        console.log("捕获1.Click btn");
    },true);

     
</script>

</body>
</html>
```



### 事件委托：

事件委托其实也叫事件代理。

定义：事件代理就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

```js
var ul = document.querySelector('ul'); 
ul.addEventListener('click', function(event){
if(event.target.tagName.toLowerCase() === 'li'){
		
}})
```



优点：

1. 减少内存消耗

   给每一个元素绑定一个函数，对内存的消耗是非常大的，然而对父类绑定一个函数，然后分发是节省内存的。

2. 动态绑定事件

   在很多时候，我们需要通过 AJAX 或者用户操作动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件；

   如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的；

   所以使用事件在动态绑定事件的情况下是可以减少很多重复工作的。



缺点：

1.  focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托；

2.  mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的；
