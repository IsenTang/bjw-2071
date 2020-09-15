



#### Less



* 安装

```
yarn add less

yarn add less-loader    // 处理编译less文件，将其转为css代码
```





* 定义变量

```
@color: pink;

background-color: @color;
```





* 嵌套规则

```
<div class="box">
   <h2>标题</h2>
   <div class="info1">
      <input type="text" />
      <p></p>
      <p class="font"></p>
   </div>
   <div class="info2">
      <img src="path" />
   </div>
</div>


.box{
   h2{}
   .info1{
      input{}
      p{}
      .font{}
   }
   .info2{
      img{}
   }
}
```





* 函数 & 运算

```
@border: 4px;
@color: rgba(255, 0, 0, 0.5);
@font-color: #842210;
```



```
height: 40+40px;
height: 30-2px;
height: 30*2px;
height: 30/2px;
height: 40px+40px;
height: 30px-2px;
height: 30px*2px;
height: 30px/2px;

font-size: 10*2px;
color: @font-color;

border-left: @border solid #ddd;
border-right: @border * 2 solid #ddd;
```



```
darken(color, 10%)      // 使颜色加深10%
saturate(color, 10%)    // 增加10%的饱和度
desaturate(color, 10%)  // 降低10%的饱和度
lighten(color, 5%)      // 增加5%的颜色亮度
darken(color, 10%)      // 降低10%的颜色亮度
fadein(color, +-10%)    // 增加或降低10%的透明度、令其更不透明
fadeout(color, +-10%)   // 降低或增加10%的透明度、令其更透明
fade(color, 5%)         // 设定5%的透明度，color上如果自带透明度 会被覆盖掉
spin(color, 10%)        // 任意方向旋转颜色的色相角度10%（感兴趣的自己研究下）
```





* 引入less文件

```
@import url(./ll	.less);
```





















#### Sass



* 安装

```
yarn add sass
yarn add sass-loader    // 处理编译less文件，将其转为css代码
```





* 变量

```
$color: #333;
background-color: $color;


* 如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。
$side : left;
.box {
   border-#{$side}-radius: 5px;
}
```





* 嵌套写法

```
同less
```





* 计算

```
height: 30px+30px;
height: 30px-10px;
height: (30/3)+px;
height: 30*3px;
```





* 继承

```
.box1 {
	font-size: 30px;
}

.box2 {
   @extend .box1;
   color: pink;
}
```





* mixin（可以指定参数和缺省值。）

```
* 普通写法
@mixin left {
   margin-left: 10px;
}
.div1 {
   @include left;
}


* 参数+缺省值
@mixin left($val: 10px) {
   margin-left: $val;
}
.div1 {
   @include left(40px);
}
```





* 颜色函数

```
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c
```





* 条件语句

```
.pp {
   @if 1 == 1 { border: 1px solid; }
   @if 5 < 3 { border: 2px dotted; }
}

.pp {
  @if 1==2 {
    color: red;
  } @else if 2==3 {
    color: yellowgreen
  } @else {
    color: peru;
    font-size: 10px;
  }
}
```





* 循环

```
<div class="border-1">border1</div>
<div class="border-2">border2</div>
<div class="border-3">border3</div>
<div class="border-4">border4</div>



* for循环
@for $i from 1 to 5{
  .border-#{$i} {
    width: #{$i}00px;
    height: 100px;
    margin: 10px;
    font-size: #{$i}0px;
  }
}



* while 循环
$y: 4;
@while $y > 0 {
  .border-#{$y} {
    border: solid #{$y}0px #333;
  }
  $y: $y - 1;
}

*each循环
@each $z in 1, 2, 3, 4 {
  .border-#{$z} {
    height: #{$z}0px;
  }
}
```





* 定义方法

```
@function returnWidth($wid) {
  @return $wid * 2;
}

.border-1{
  width: returnWidth(10px);
}
```





* 引入

```
@import "./ss.scss";
```





























