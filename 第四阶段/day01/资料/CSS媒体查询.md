# CSS媒体查询

https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries

### 什么是媒体查询：

根据设备显示器的特性（视口宽度，屏幕比例，设备方向）来设定css样式。



### 几个概念：

- 媒体类型：

  - all （所有）
  - print （适用于在打印预览模式下在屏幕上查看的分页材料和文档。） **用于打印机**
  - screen （主要用于屏幕。）**用于电脑屏幕，平板，智能手机等。**
  - speech （主要用于语音合成器。）**用于屏幕阅读器**

  

- 语法关键字：（逻辑操作符）

  - and    多个特性连接到一块
  - not	 排除某个特性
  - only    指定特定的媒体类型
  - , 逗号用于将多个媒体查询合并成为一个规则

- 宽和高

  - width，height （**显示区域的宽度**）
  - min-width，max-width。。。
  - device-width，device-height （**设备的宽度**）
  - device-min-width，device-max-width



引入css，通过media来设置相对应的大小。

```html
<link rel="stylesheet" type="text/css" href="m320.css" media="only screen and (max-width:320px)"/>
<link rel="stylesheet" type="text/css" href="m480.css" media="only screen and (min-width:321px) and (max-width:375px)"/>
```

```css
 @media only screen  and (max-width: 420px) {
   body {
     background-color: red;
   }
}

@media (min-device-width: 100px) and (max-device-width: 330px) {
  .main {
    background-color: blue;
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <style>
        .main{
            width: 200px;
            height: 200px;
            background-color: aqua;
        }

        @media only screen and (min-width: 421px) and (max-width: 720px) {
            .main {
                background-color: blue;
            }
        }

        @media only screen  and (max-width: 420px) {
            .main {
                background-color: red;
            }
        }

        
    </style>
</head>
<body>
    <!--  -->
    <div class="main"></div>
</body>
</html>
```



常用的分辨率:

https://css-tricks.com/snippets/css/media-queries-for-standard-devices/





### 练习：

写一个头部，模拟github。当1023px的时候，变成一个button