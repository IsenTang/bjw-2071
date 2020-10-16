# React Hooks

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

首先，在16.8之后，建议使用hook完成之前class所做的各种工作，比如：状态state，生命周期等等



## State Hook

### 简单使用：

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0); // 可以是基本数据类型也可以是对象

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 这是什么写法？

https://zh-hans.reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean

```js
// 数组的解构 
const [count, setCount] = useState(0); 
// 其实useState返回的是一个数组
const array = useState(0);

console.log(array[0]);

console.log(array[1]);
```

可以有多个state hook：

### 值得注意的是：

1. #### 多个state变量

```jsx
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

2. #### 可以传入一个function作为参数，来改变state，注意，只能使用当前钩子的state

```jsx
function Example() {
  
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  function click(){
    setAge( (age)=>{
      
      return age + 1
    })
  }
}
```

3. 覆盖而不是合并

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0, name: 'frank' };
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState((state) => {
  	return {count: state.count + 1}
  })
}

const [someOne, setSomeOne] = useState({ count: 0, name: 'frank' })

const handleClick = () => {
  setSomeOne({ ...someOne,count: someOne.count + 1 })
}
```



## Effect Hook

`useEffect` 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

语法：

```jsx
useEffect(() => {
      effect
      return () => {
         cleanup
      }
}, [input])
```

何谓副作用？( side effect )

在计算机科学中，**函数副作用**指当调用[函数](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0)时，除了**返回函数值**之外，还**对主调用函数产生附加的影响**。例如修改全局变量（函数外的变量）或修改参数。（想象一下药物的副作用，同理）。

```js
// 比如 console.log(xxxx)
// http 请求
// 修改全局变量
let global = 1;

function main(x){
	
  	global = 2;
  
    console.log(x);

    return x;
}

main(x);
```

### 简单使用：

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

当你调用 `useEffect` 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。

### 多个副作用：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  
  useEffect(() => {
    
    console.log('now count ===>',count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 对应状态的副作用：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  const [name , setName ] = userState('isen');

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  
  useEffect(() => {
    
    console.log('now count ===>',count);
  });
  
  useName(() => {
    
    console.log('now name ===>',name);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



### 清除effect：

我们来看这么一个需求：

在进入页面的时候，设置定时器，每5s打印一次。

如果是vue和老版本class形式的react，它的书写方法是什么？

React新版本如下：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  
  const [count, setCount] = useState(0);

    useEffect(() => {

      let timer = setInterval(()=>{

         console.log('time');
      },5000);
      return () => {
         if(timer){

            console.log(' clear ');
            clearInterval(timer);
         }
      };
   });
  
  useEffect(() => {
    
    console.log('now count ===>',count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



###  根据不同的状态来执行不同的副作用：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  }, []);
  
  useEffect(() => {
    
    console.log('now count ===>',count);
  },[ count ]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



### 总结：

对于useEffect来说：

- 是执行相对应的函数副作用的
- 可以有多个副作用
- 可以通过useEffect第二个参数，这是一个数组，传入相对应的state，当state改变时候，执行对应的副作用
- 可以返回一个函数，代表着清除副作用，这常用于发布订阅这样的模式。





## Ref hook

老看见ref（Reference），在编程世界中，这是引用的意思。

我们现在有一个需求, 设置一个数字，然后按下按钮每秒自增1，然后显示在我们的页面上，再按下按钮，停止自增。如果我们这么写，会是怎么样的？



### 老版本写法：

```jsx
import React, { Component } from 'react';

export default class Home extends Component {

   constructor (){

      super();

      this.state = {
         count:0
      };
   }

   componentWillUnmount (){

      if(this.timer){

         clearInterval(this.timer);
      }
   }

   render () {
      return (
         <div>
            Home

            <div>

               { this.state.count }
            </div>

            <div>

               <button onClick={ ()=>{ this.timer = setInterval(()=>{

                  this.setState({
                     count : this.state.count + 1
                  });
               },1000);} }> click11 </button>
            </div>
         </div>
      );
   }
}
```



### 新版本写法：

```jsx
import React,{ useEffect , useState } from 'react';

function Home (){

   const [ count,setCount ] = useState(0);

   const [ isStart,setIsStart ] = useState(false);

   useEffect(()=>{

      let timer;
      if(isStart){
         timer = setInterval(()=>{
            setCount(count + 1);
           
           setCount((v)=>{
             	return v+1;
           })
         },1000);
      }

      return ()=>{

         if(timer){

            clearInterval(timer);
         }
      };

   },[ isStart ]);

   function click (){

      setIsStart(!isStart);
   }

   return (
      <div>
         home
         <div> count : { count }</div>

         <button onClick={ click }>{ isStart ? 'stop' : 'start' }</button>
      </div>
   );

}

export default Home;

```

这样写读起来没什么问题，但是，执行起来呢？那么问题出在哪里？

还记得闭包么？

```js
function createIncrement(i) {
    let value = 0;
    return function increment() {
      value += i;
      console.log(value);
      const message = `Current value is ${value}`;
      return function logValue() {
        console.log(message);
      };
    }
}

const inc = createIncrement(1);
const log = inc(); // 1
inc();             // 2
inc();             // 3
log();             // "Current value is 1"
```

https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

>useEffect、useMemo、useCallback都是自带闭包的。每一次组件的渲染，它们都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。

怎么改呢？

可以这样，还记得setxxx的时候可以传入一个函数来改变么？

```jsx
timer = setInterval(()=>{
            setCount((count)=>count + 1);
  },1000);
```

但是这样有一个问题，就是如果我需要别的state而不是同一个state呢？比如：

```jsx
import React,{ useEffect , useState } from 'react';

function Home (){

   const [ count,setCount ] = useState(0);
  
   const [step, setStep ] = useState(1);

   const [ isStart,setIsStart ] = useState(false);

   useEffect(()=>{

      let timer;
      if(isStart){
         timer = setInterval(()=>{
            setCount((count)=>count + step );
  			},1000);
      }

      return ()=>{

         if(timer){

            clearInterval(timer);
         }
      };

   },[ isStart ]);

   function click (){

      setIsStart(!isStart);
   }

   return (
      <div>
         home
         <div> count : { count }</div>

         <button onClick={ click }>{ isStart ? 'stop' : 'start' }</button>
      </div>
   );

}

export default Home;
```

### 使用useRef：

```jsx
import React,{ useEffect , useState,useRef } from 'react';

function Home ({ num }){

   const [ count,setCount ] = useState(0);

   const [ isStart,setIsStart ] = useState(false);

   const countRef = useRef(count);

   useEffect(()=>{

      console.log(' in ');
      countRef.current = count;
   },[count]);

   useEffect(()=>{

      let timer;
      if(isStart){
         timer = setInterval(()=>{
            // console.log(num);
            setCount( countRef.current + 1);
         },1000);
      }

      return ()=>{

         if(timer){

            clearInterval(timer);
         }
      };

   },[ isStart ]);

   function click (){

      setIsStart(!isStart);
   }

   return (
      <div>
         home
         <div> count : { countRef.current }</div>

         <button onClick={ click }>{ isStart ? 'stop' : 'start' }</button>
      </div>
   );

}

export default Home;

```

```jsx
import React, { useRef } from "react";

const CustomTextInput = () => {
  const textInput = useRef();

  focusTextInput = () => textInput.current.focus();

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}
```



### 原理向：（有兴趣自己查看）

```js
function main(){

    let value = 0;

    function set(){

        console.log(value);
        value = value + 1;
    }

    return function func(cb){

        const val = value;
        console.log(value);

        // value++

        cb(val,set);
    }
}


const useEffect = main();

useEffect((val,func)=>{

    
    setInterval(()=>{
        func();
        console.log(val);
    },1000)
});
```



## Memo hook

还记得shouldComponentUpdated么？在函数式的组件中，没有该生命周期，那么该如何达到相对应的需求呢？

### React.memo

```jsx
function Home (){

   const [ num,setNum ] = useState(0);

   return (
      <div>
         home

         <div>{ num }</div>

         <button onClick={ ()=> {

            setNum(num + 1);
         } }> home click </button>

         <Child name={ 'isen' }/>
      </div>
   );

}

export default Home;


import React from 'react';

function Child ({...}) {

   console.log('child');
   return (
      <div>
         child
      </div>
   );
}

export default React.memo(Child,(preProps,nextProps)=>{

   console.log(pre.name);
   console.log(next.name);
   return true;
});
```



### 颗粒度更小的方式 --- useMemo

```jsx
function Home (){

   const [ num,setNum ] = useState(0);

   const [ name, setName ] = useState('isen');

   return (
      <div>
         home

         <div>{ num }</div>

         <button onClick={ ()=> {

            setName('lucy');
         } }> home name click </button>

         <button onClick={ ()=> {

            setNum(num + 1);
         } }> home num click </button>

         <Child name={ name }/>
      </div>
   );

}

export default Home;


function Child ( { name }) {

   console.log(' child ');
   const nameComponet = useMemo(()=>{

      console.log(' use Memo ');
      return (
         <div>

            { name }
         </div>
      );
   },[ name ]);
   return (
      <div>

            child
         { nameComponet }
      </div>
   );
}

export default Child;
```

### useCallback版本：

```jsx
function Home (){

   const [ num,setNum ] = useState(0);

   const [ name, setName ] = useState('isen');

   return (
      <div>
         home

         <div>{ num }</div>

         <button onClick={ ()=> {

            setName('lucy');
         } }> home name click </button>

         <button onClick={ ()=> {

            setNum(num + 1);
         } }> home num click </button>

         <Child name={ name }/>
      </div>
   );

}

export default Home;


function Child ( { name }) {

   console.log(' child ');
   const nameComponet = useCallback(()=>{

      console.log(' use Memo ');
      return (
         <div>

            { name }
         </div>
      );
   },[ name ]);
   return (
      <div>

            child
         { nameComponet() }
      </div>
   );
}

export default Child;
```



## 自定义hook：

hook我们看出来，其实就是一个函数，我们可以通过封装hook，来抽取对应的业务。

```jsx
import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
   const [ position, setPosition ] = useState({ x: 0, y: 0 });
   useEffect(() => {
      const updateMouse = (e) => {
         setPosition({ x: e.clientX, y: e.clientY });
      };
      document.addEventListener('mousemove', updateMouse);
      return () => {
         document.removeEventListener('mousemove', updateMouse);
      };
   });
   return position;
};

export default useMousePosition;
```



## hook的规则：

https://zh-hans.reactjs.org/docs/hooks-rules.html

https://reactjs.org/docs/hooks-rules.html

```jsx
import React,{ useEffect , useState } from 'react';

function Home (){

   const [ count,setCount ] = useState(0);

   const [ name,setName ] = useState('isen');

   /* eslint-disable */
   if(name === 'isen'){
      useEffect(()=>{

         console.log('useEffect');
      });
   }

   const [ num,setNum ] = useState(1);

   return (
      <div>
         home
         <div> count : { count }</div>
         <div> name : { name }</div>
         <div> num : { num }</div>

         <button onClick={ ()=>{

            setName('lucy');
         }}>test</button>
      </div>	
   );

}

export default Home;
```





