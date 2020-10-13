# Pure component

还记得shouldComponentUpdate么？pure component自带这个周期来进行比较，如果props，state相同，就不进行渲染。

```jsx
class App extends React.Component{

constructor(){

super()

this.state = {
title: 'App',
name:'isen'
};

}

click = ()=>{

this.setState({
title:'changed'
})
}


render(){

console.log(' app render ');
return (


<div >

<div>{this.state.title}</div>
<Child name={this.state.name}/>

<button onClick={this.click}>click</button>
</div>
)
}
}

class Child extends React.Component{


shouldComponentUpdate(nextProps){

console.log(this.props.name);
console.log(nextProps);
return false;
}
render(){

console.log(' Child render ');
return (
<div>
{ this.props.name } 
</div>
)
}
}


ReactDOM.render(
<App />,
document.getElementById('example')
);
```

### 注意，在这里是shallow compare。

何谓shallow compare？

浅比较，只比较第一层，还记得浅拷贝么？

```jsx
class App extends React.PureComponent {

  constructor(){

    super();

    this.state = {
    items: [1, 2, 3]
    }
  }

    handleClick = () => {
    const { items } = this.state;
    items.pop();
    this.setState({ items });
  }
  render() {
  return (< div>
  <ul>
  {this.state.items.map(i => <li key={i}>{i}</li>)}
  </ul>
  <button onClick={this.handleClick}>delete</button>
  </div>)
  }
}
```

```jsx
class App extends React.Component{

  constructor(){

    super()

    this.state = {
      title: 'App',
      obj:{
        person:{
          name:'isen'
        }
      }
    };

  }

  click2 = () =>{

    const { obj } = this.state;

    obj.person.name = 'tom';

    this.setState({
      obj
    })
  }

  render(){

    return (

      <div >

        <div>{this.state.title}</div>


        <Child2  obj={this.state.obj}/>

        <button onClick={ this.click2 }>click2</button>
      </div>
    )
  }
}

class Child2 extends React.PureComponent{

  render(){

    console.log(' Child2 render ');
    return (
      <div>
        { this.props.obj.person.name } 
      </div>
    )
  }
}
```

