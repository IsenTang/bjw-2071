# BOM

## 是什么？

（browser object model）浏览器对象模型，这个对象就是对应着浏览器窗口window。

它提供了一些方法用于访问浏览器的功能，这些功能和网页内容无关。



### window对象

window对象是BOM的核心，表示浏览器正打开的窗口，它是一个全局对象。

**我们定义的全局变量，其实也是定义到了window上的**。



```html
<script>
	alert(123);
  
  let flag = confirm('确定么？');
  
  let a = prompt('请输入一段文字','...')
  
  
  // location 访问当前载入的URI
  
  location.replace('https://www.baidu.com')
  
  //navigator 浏览器环境
  navigator.appVersion
   
  //history 浏览器历史记录
</script>
```





区别：

![BOM&DOM](/Users/touitsuchou/Documents/workspace/banyuan/课件/前端基础/img/BOM&DOM.png)