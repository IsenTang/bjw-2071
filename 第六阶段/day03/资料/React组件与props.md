# React组件与props

### 基本组件

*注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头*

```jsx
function ArrayElements(){
  const eles = [
    <h1 >1</h1>,
    <h1 >2</h1>
  ]
  return eles;
}


ReactDOM.render(
<ArrayElements/>,
document.getElementById('example')
);
```



我们可以使用function的方式创建组件，同时也可以使用es6的class来定义一个组件

```jsx
class ArrayElements extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return eles;

  }
}


ReactDOM.render(
  <ArrayElements/>,
  document.getElementById('example')
);
```

### 组件间的传递参数

```jsx
class ArrayElements extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]
	
    
    // 为啥要有括号？
    return (
      <div>
        <span>{this.props.name}</span>
        { eles }
      </div>

    );

  }
}


ReactDOM.render(
  <ArrayElements name='isen'/>,
  document.getElementById('example')
);
```

### 复合组件：

```jsx
class ArrayElements extends React.Component{

            constructor(props){
                super(props)
            }

            render(){

                const eles = [
                    <h1 >2</h1>,
                    <h1 >3</h1>,   
                ]

                return (
                    <div>
                        <span>{this.props.name}</span>
                        { eles }

                        <Child/>
                    </div>

                );
                
            }
        }

        class Child extends React.Component{

            constructor(props){
                super(props)
            }

            render(){

                return (
                    <div>
                        child
                    </div>
                )
            }
        }


        ReactDOM.render(
            <ArrayElements name='isen'/>,
            document.getElementById('example')
        );
```

### 组件上的class属性：

```jsx
class Child extends React.Component{

constructor(props){
super(props)
}

render(){

// 要改成className ，那么为什么呢？
return (
<div className='child'>
child
</div>
)
}
}
```

在解构函数中：

```js
const obj = {
  class : '1'
}

const { class } = obj
```

那么问题又来了，vue中是不是用的class？它是怎么做的？

那么vue中的this呢？

什么是严格模式？

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

[ECMAScript 5](http://www.ecma-international.org/publications/standards/Ecma-262.htm)的**严格模式**是采用具有限制性JavaScript变体的一种方式，从而使代码显示地 脱离“马虎模式/稀松模式/懒散模式“（sloppy）模式。

严格模式不仅仅是一个子集：它的产生是为了形成与正常代码不同的语义。

不支持严格模式与支持严格模式的浏览器在执行严格模式代码时会采用不同行为。

所以在没有对运行环境展开**特性测试**来验证对于严格模式相关方面支持的情况下，就算采用了严格模式也不一定会取得预期效果。严格模式代码和非严格模式代码可以共存，因此项目脚本可以渐进式地采用严格模式。

严格模式对正常的 JavaScript语义做了一些更改。

1. 严格模式通过**抛出错误**来消除了一些原有**静默错误**。
2. 严格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下**运行得更快**。
3. 严格模式**禁用了**在ECMAScript的未来版本中可能会定义的一些语法。

