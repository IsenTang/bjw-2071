# react阶段项目

一个两个，第一个简单，是基本的redux使用，第二个难，需要一定的逻辑能力。

1. 将上一阶段的vue项目user-center中的主要页面渲染出来（除了登陆页面以外）

   - 这意味着你们需要一个用户id放在request的头部，使用 5f85685c7cac8518b1099c1d即可。

   - 虽然是一个页面，但是所有状态放在redux中。

   - 按照我们所写的框架完成。

   - 上一阶段的项目是使用的element-ui来完成，本阶段可以使用elemen-ui或者ant-design来完成，两者都是组件库，使用并不困难，可以查询文档进行。

     element-ui：https://element.eleme.io/#/zh-CN/component/installation

     ant-design：https://ant-design.gitee.io/index-cn

2. 完成一个简单的登陆页面

   - 原先我们是使用用户名密码的方式进行登陆注册，其实还有一种方式，是通过手机号验证码进行登陆

   - 我们模拟一下这个场景，分别有2个页面

     ![login](http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/teach/login.png)
![vcode](http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/teach/vcode.png)

	- 在login页面，需求是用户只能输入中国手机号，输入到11位数字后自动跳转到下一个页面。在跳转之前需要做1件事情，验证手机号是否合法，通过正则进行验证。输入框最多输入11位，超过11位并不能输入。
	
	- 在vcode页面（难点），完成如下图所示的样子：
		![login](http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/teach/4-vcode.gif)
		
	- 要求4个input框，鼠标点击并不会使其focus，每个input只能输入一个数字，输入一个后会自动focus下一个input（自动跳转到下一个input），同时当按下delete时候，删除本input的数字，focus上一个input。注意，全程只有一个input可以被输入，同时鼠标无论如何都不能改变输入框的focus与否。在输入4个值后，检测每个都是数字，最后打印出来即可。
	
	- tips：多测试一些情况，很容易出现bug。

```jsx
// 限制input的字数：
	let [ value , setValue ] = useState('');
	
	function control(e){
    
    let v = e.target.value;
    
    if(v.length >= 11){
      // 截断
     	v = v.substring(0,11);
    }
    
    setValue(v);
  }

 <input  value={value} onChange={ control } ></input> 

// input focus 

let inputRef = useRef();

useEffect(()=>{
  inputRef.current.focus();
},[]);
<input  ref={inputRef} ></input> 


// 多个input想要放在一个ref中
// https://stackoverflow.com/questions/57810378/how-to-create-dynamic-refs-in-functional-component-using-useref-hook
let inputRef = useRef([]);

<input  ref={ (el)=>{ inputRef.current[0] = el } } ></input> 
<input  ref={ (el)=>{ inputRef.current[1] = el } } ></input> 

```

最后注意一下，useState是对比的引用，如果是相同的引用不会触发重新渲染，比如：

```jsx
let [code,setCode] = useState([]);

// 并不会触发重新渲染
function set(){
  	code[0] = 1;
  	setCode(code);
}

// 会触发重新渲染
function set(){
  
  let cloneCode = _.cloneDeep(code);
  
  cloneCode[0] = 1;
  
  setCode(cloneCode);
}

```

