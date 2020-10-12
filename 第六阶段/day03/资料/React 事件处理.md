# React 事件处理



```jsx
class Element extends React.Component{

            constructor(props){
                super(props)
            }

            click(){
                console.log(1);
            }
                

            render(){

                const eles = [
                    <h1 >2</h1>,
                    <h1 >3</h1>,   
                ]

                return (
                    <div>
                        <span>{this.props.name}</span>
                

                        <button onClick={ this.click }>click</button>
                    </div>

                );
                
            }
        }

        


        ReactDOM.render(
            <Elements name='isen'/>,
            document.getElementById('example')
        );
```

那么如果这样呢？

```jsx
class Element extends React.Component{

  constructor(props){
    super(props)
  }

  click(){
    this.test();
  }

  test(){

    console.log(1);
  }


  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <span>{this.props.name}</span>


        <button onClick={ this.click }>click</button>
      </div>

    );

  }
}




ReactDOM.render(
  <Elements name='isen'/>,
  document.getElementById('example')
);
```

改成这样呢？

```jsx
class Element extends React.Component{

  constructor(props){
    super(props)
  }

  click = ()=>{
    this.test();
  }

  test(){

    console.log(1);
  }


  render(){

    const eles = [
      <h1 >2</h1>,
      <h1 >3</h1>,   
    ]

    return (
      <div>
        <span>{this.props.name}</span>


        <button onClick={ this.click }>click</button>
      </div>

    );

  }
}




ReactDOM.render(
  <Elements name='isen'/>,
  document.getElementById('example')
);
```



再说一次this

```js
class Person {
    sayThis () {
        console.log(this); // 这里的 `this` 指向谁？
    }
   
    exec (cb) {
        cb();
    }
   
    render () {
        this.exec(this.sayThis);
    }
}

const person = new Person();
person.render(); 


// 注意，使用class的时候，默认开启了严格模式，所以打印出了undefined
function A(){

}

A.prototype.render = function(){

    this.exec(this.click);
}

A.prototype.click = function (){

    console.log(this);
}

A.prototype.exec = function(func){

    func();
}

const a = new A();

a.render()
```

