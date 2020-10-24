### gird布局与column-count

### grid

![bg2019032506](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

语法：

```css
div {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

`grid-template-columns`属性定义每一列的列宽

`grid-template-rows`属性定义每一行的行高。

```html

<style>

  .container{
    display : grid;
    /* grid-template-rows : repeat(100px); */
    grid-template-columns : repeat(auto-fill,33%);
  }

  .container>div:nth-child(odd){
    background-color : aqua;
  }

  .container>div:nth-child(even){
    background-color : bisque;
  }

  .item{
    height : 200px;
  }
</style>

<div class="container">

  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### column-count

column-count属性指定某个元素应分为的列数

```css
.container{

    column-count :2;
 }
```

