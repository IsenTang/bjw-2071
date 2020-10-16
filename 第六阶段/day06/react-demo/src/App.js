import React,{ useState,useEffect,useRef } from 'react';
import './App.css';

import { useTest,useTime } from './test';

import Comp from './Comp';
import Child from './Child';

function App() {

//   let [name,setName] = useState('isen');

//   let [ test, setTest ] = useTest();

//   let [clock,setClock] = useState({
//     id:1,
//     time:1000
//   })

//   let [count,setCount] = useState(0);

//   let [isShow,setIsShow] = useState(true)
//   // let result = useState('init-value');
  
//   // useEffect(()=>{

//   //   console.log('count useEffect');
//   //   document.title = `You click ${count} times`
//   // },[count])

//   // useEffect(()=>{

//   //   console.log(' name useEffect');
//   //   console.log(name);
   
//   // },[count,name])
//   useTime();

//   return (
//     <div className="App">
// {/* 
//         <div>

//           id:{ clock.id }
//         </div>

//         <div>

//           time:{ clock.time }
//         </div> */}

//         <div>

//           { test }
//         </div>

        

//         {/* <div>

//           count:{ count }
//         </div> */}
//         {/* <div>

//           <button onClick={()=>{

//               setCount((v)=>{
//                 return v+1;
//               })

//           }}>count</button>
//         </div> */}

//         <div>

//           <button onClick={()=>{

//               setIsShow(!isShow)

//           }}>isShow</button>
//         </div>

//         { isShow ? <Comp></Comp> : null}
//     </div>
//   );

  let [count,setCount] = useState(0);

  // let [step,setStep] = useState(1);

  // let [isStart,setIsStart] = useState(false);

  // let [name,setName] = useState('isen');

  // const countRef = useRef(count);

  // const stepRef = useRef(step);

  // const textInput = useRef();

  // useEffect(()=>{

  //   console.log('in');
  //   textInput.current.focus()
  // })

  // useEffect(()=>{

  //   countRef.current = count;
  // },[count]);

  // useEffect(()=>{

  //   stepRef.current = step;
  // },[step]);

  // /* eslint-disable */ 
  // useEffect(()=>{

  //   console.log(' effect ');
  //   let timer
  //   if(isStart){
      
  //      timer= setInterval(()=>{

  //       // console.log(' in ===>',countRef.current);
  //       setCount( countRef.current + stepRef.current);
  //     },1000)
  //   }
  
  //   return ()=>{

  //     console.log(' in return ');
  //     if(timer){

  //       clearInterval(timer)
  //     }
  //   }
  // },[isStart])

  // return (

  //   <div>

  //     <div>count:{ count }</div>
      
  //     <div>step:{ step }</div>
      

  //     <button onClick={ ()=>{
  //       setIsStart(!isStart)

        
  //     }}> start </button>

  //     <button onClick={ ()=>{
        
  //       // textInput.current.focus() 

  //       setStep(2)
  //     }}> step </button>

  //     <button onClick={ ()=>{
        
  //       // textInput.current.focus() 

  //       setName('lucy')
  //     }}> name </button>

  //     <div>

  //       <input ref={ textInput } ></input>
  //     </div>

  //     <Child name={ name }></Child>
  //   </div>

  // )

  let [name,setName] = useState('isen');

  let [isShow,setIsShow] = useState(true);

  useEffect(()=>{

    console.log('effect')
  },[name])

  return (

    <div>
      <div>{name}</div>
      <div>

        <button onClick={()=>{

          setName(Math.random())
        }}> click </button>
      </div>

      <div>

        <button onClick={()=>{

          setIsShow(!isShow)
        }}> isShow </button>
      </div>

      { isShow ? <Child></Child> : null}
      
    </div>
  )
}

export default App;
