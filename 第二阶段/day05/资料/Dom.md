# DOM



## 是什么？

文档对象模型（Document Object Model）。将html网页转换成一个文档对象，主要用来处理网页内容。



```html
<html>

  <head>

    <title>title</title>

  </head>

  <body>

    <a href=“”>链接</a>

    <h1>标题</h1>

  </body>

</html>
```

![dom](/Users/touitsuchou/Documents/workspace/banyuan/课件/前端基础/img/dom.png)







#### 获取节点：

```html
<div>

	<div class="test" id="test">
		<div class='test' id='test-wirte'></div>
		<!-- 查看节点 -->
		<input type="text" id="input" value="123" class='input-test'>

		<div id='main'>
			<div class="content red"></div>

			<div class="content"></div>

			<div class="content red"></div>
		</div>

		<div id="parent">

		</div>
	</div>
</div>

<style>

	.content{
		width: 100px;
		height: 20px;
	}

	.red{

		background-color: red;

	}
</style>

<script>

	//id
	let ele = document.getElementById('test');

	//tag name
	let elements = document.getElementsByTagName('div');

	//混合使用
	let children = ele.getElementsByTagName('div');

	//class
	let elementsByClass = document.getElementsByClassName('test');

	//css  选择器
	let elementByCssId = document.querySelector('#test')

	let elementByCssClass = document.querySelector('.test')

	let allElementByCssClass = document.querySelectorAll('.test')

	//=================================================================

	// 属性

	let inputEle = document.getElementById('input');

	let val = inputEle.getAttribute('value');
  
  inputEle.value;

	inputEle.setAttribute('value','test');

	//子元素
	let mainEle = document.getElementById('main');
	let childrenNodes = mainEle.childNodes;

	// 元素节点：1 (element)

	// 属性节点：2

	// 文本节点：3

	// 注释节点：8

	for(let i = 0; i< childrenNodes.length;i++){

		if(childrenNodes[i].nodeType === 1 && childrenNodes[i].className.includes('red')){
			
			childrenNodes[i].style.backgroundColor = 'yellow'
		}
	}

	// 写入元素
	document.getElementById('test-wirte').innerHTML = '123';

	var para = document.createElement('p');
	
	var parent = document.getElementById('parent');
	
	parent.appendChild(para);
	
	para.innerHTML = 'hello;';
	// var txt = document.createTextNode('hello world');
	
	// para.appendChild(txt);

	var table = document.createElement("table");
	table.border = 1;
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	tbody.insertRow(0);
	tbody.rows[0].insertCell(0);
	tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1, 1"));
	tbody.rows[0].insertCell(1);
	tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2, 1"));
	tbody.insertRow(1);
	tbody.rows[1].insertCell(0);
	tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1, 2"));
	tbody.rows[1].insertCell(1);
	tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2, 2"));
	document.body.appendChild(table);

</script>
```



### 事件：

1. on-xxx

```html
<div onclick='test'>
  
</div>

<script>
	
  function test(){
    
    console.log(1);
  }
  
  // 如果是函数名是click呢？
  
  // 如果函数名为onclick呢？
</script>
```

2. 元素节点的事件属性

```html
<div>
  
</div>

<script>

	div.onclick = function (){
    
    console.log(1);
  }
  
  function test(){
    
    console.log('test');
  }
  
  div.onclick = test;
</script>
```

3. addEventListener

```html
<div>
  
</div>

<script>
	div.addEventListener('click',function(){
    
    console.log(2);
  })
</script>
```



常用的事件：

1. onchange HTML 元素改变
2. onclick 用户点击 HTML 元素
3. onmouseover 用户在一个HTML元素上移动鼠标
4. onmouseout 用户从一个HTML元素上移开鼠标
5. onkeydown 用户按下键盘按键
6. onload 浏览器已完成页面的加载





### script位置问题

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

 
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script> -->
    <script>
        
        window.onload = function (){

            var mainEle = document.getElementsByClassName('main')[0];
    
            console.log(mainEle);
        }
        
    </script>
    <style>
        .main{

            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>

</head>
<body>
    

    <div class="main" /></div>

</body>


</html>
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

 
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    
    <style>
        .main{

            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>

</head>
<body>
    

    <div class="main" /></div>

</body>

<script>

</script>
</html>
```

