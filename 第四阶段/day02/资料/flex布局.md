# flex布局



2009年，w3c提出了一种新的方案--flex布局，可以简便的完整的响应式的实现各种页面布局。目前已经得到了所有浏览器的支持，这意味着，现在可以很安全的使用这项功能。

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

![bg2015071004](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。



1. 首先，设置为flex布局

   ```css
   .main{
     display:flex
   }
   ```

   

2. `flex-direction`属性决定主轴的方向（即项目的排列方向，默认为row)

   ```css
   .box {
   	flex-direction: row | row-reverse | column | column-reverse;
   }
   ```

   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

3. flex-wrap 换行

   ```css
   .box{
     flex-wrap: nowrap | wrap | wrap-reverse;
   }
   ```

   ![flex-wrap](/Users/touitsuchou/Documents/workspace/banyuan/课件/前端/img/flex-wrap.png)

4. Justify-content: 在主轴上的对齐方式：

   ``` css
   .box {
     justify-content: flex-start | flex-end | center | space-between | 		space-around;
   }
   ```

   - `flex-start`（默认值）：左对齐
   - `flex-end`：右对齐
   - `center`： 居中
   - `space-between`：两端对齐，项目之间的间隔都相等。
   - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

   

   ![bg2015071010](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

5. align-items:属性定义项目在交叉轴上如何对齐

   ```css
   .box {
     align-items: flex-start | flex-end | center ;
   }
   ```

   ![bg2015071011](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

6. Order : 排序，设置在内部项目上：

   默认为0，数值越小排名越前。

   ```css
   .item {
     order: 1
   }
   ```

7. Flex-grow: 定义项目的放大比例，默认为0,

   如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

   ```css
   .item {
     flex-grow: <number>; /* default 0 */
   }
   ```

   

8. Flex-shrink:定义项目的缩小比例，默认为1，如果空间不足，该项目缩小。

   如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

   ```
   .item {
     flex-shrink: <number>; /* default 1 */
   }
   ```

9. Flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

   ```
   .item {
     flex-basis: <length> | auto; /* default auto */
   }
   ```

10. Flex: 是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

    ```css
    .item {
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }
    ```

    

11. Align-self: 允许单个项目由与其他项目不一样的对齐方式。覆盖了align-items属性，默认为auto，表示继承父元素的align-items

    ```css
    .item {
      align-self: auto | flex-start | flex-end | center;
    }
    ```

    

练习：

Baidu.com