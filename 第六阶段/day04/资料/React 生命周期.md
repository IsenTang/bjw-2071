# React 生命周期



##### React的生命周期从广义上分为三个阶段：

- ##### 挂载

  挂载阶段，也可以理解为组件的初始化阶段，就是将我们的组件插入到DOM中，只会发生一次

- ##### 更新

  更新阶段，当组件的props改变了，或组件内部调用了setState或者forceUpdate发生，会发生多次

- ##### 卸载

  卸载阶段，当我们的组件被卸载或者销毁了



### vue与react的生命周期

<center >
	<img src='https://cn.vuejs.org/images/lifecycle.png' />
	<img src='https://pic3.zhimg.com/80/v2-660be87533ed5dca7580dbd907ac1f36_1440w.jpg'  style='margin-top:20px'/>
</center>
```jsx
class App extends React.Component{
						
  					// 初始化状态
            constructor(props){

                super(props)
					
                this.state = {
                    name:'app-name'
                }
            }
						
  					// 组件即将被渲染到页面之前触发
            componentWillMount(){

                console.log(' componentWillMount ');
            }
	
  					// 组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
            componentDidMount(){

                console.log(' componentDidMount ');
            }

            click = ()=>{

                this.setState({

                    name:'child-name'
                })
            }

            render(){

                console.log('App render');
                return (

                    <div>
                        <div>App</div>

                        <Child name={ this.state.name }/>

                        <button onClick={ this.click }>click</button>
                    </div>
                )
            }
        }

        class Child extends React.Component{

            componentWillMount(){

                console.log(' componentWillMount ');
            }

            componentDidMount(){

                console.log(' componentDidMount ');
            }

						// 组件接收到属性时触发
            componentWillReceiveProps(nextProps){

                console.log(' componentWillReceiveProps ');

                console.log('nextProps ===>', nextProps);

                console.log(this.props);
            }
						
          
            // 当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发
            shouldComponentUpdate(nextProps, nextState){

                console.log('shouldComponentUpdate');

                console.log('nextProps ===>', nextProps);

                console.log(this.props);

                return false;
            }
						
          
            // 组件即将被更新时触发
            componentWillUpdate(){

                console.log(' componentWillUpdate ');

            }

						// 组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作
            componentDidUpdate(){

                console.log(' componentDidUpdate ');

            }

						// 组件被销毁时触发。这里我们可以进行一些清理操作
            componentWillUnmount(){

                console.log('componentWillUnmount');
            }

						// 渲染
            render(){

                console.log('render');
                return (
                    <div>{ this.props.name }</div>
                )
            }

        }



        ReactDOM.render(
            <App name='isen'/>,
            document.getElementById('example')
        );
```

### 需要注意的点：

1. componentWillMount中调用setState是不会触发re-render的，而是会进行state合并。componentWillMount中的this.state不是最新的，在render中才可以获得更新之后的this.state。
2. componentWillReceiveProps中调用setState是不会触发re-render的，而是进行state的合并



在shoudupdated中

```vue
<template>
    <div> Home 


        <div> {{ test.val }}</div>


        <div> {{ test.value }}</div>

        <div> <button @click="click()">test</button></div>
        <div> <button @click="click2()">test</button></div>
    </div>

    
</template>

<script>
import Vue from 'vue'

export default {
     data: function(){

         return {

             test:{
                 val:2
             }
         }
     },
     updated(){

         console.log('updated==>',this.$data.test.value);
     },
     methods:{
         click(){

             this.$data.test.val = 3;

            //  this.$data.test.value = 'on'

             Vue.set(this.$data.test,'value','on');

             console.log(this.$data.test);
            //  this.$forceUpdate();
         },

         click2(){

             this.$data.test.value = 'in'

             console.log(this.$data.test);
            //  this.$forceUpdate();
         }
     }
}
</script>

<style>

</style>

```

