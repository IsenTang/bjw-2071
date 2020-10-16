import React,{ useState,useEffect,useRef } from 'react';
import './App.css';

import { useTest,useTime } from './test';

import Comp from './Comp';

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

  let [count,setCount] = useState(1);

  let [step,setStep] = useState(1);

  let [isStart,setIsStart] = useState(false);

  const countRef = useRef(count);

  useEffect(()=>{

    console.log(' in ');
    countRef.current = count;
  },[count]);

  /* eslint-disable */ 
  useEffect(()=>{

    console.log(' effect ');
    let timer
    if(isStart){
      
       timer= setInterval(()=>{

        // console.log(' in ===>',countRef.current);

        setCount( countRef.current + 1);
      },1000)
    }
  
    return ()=>{

      console.log(' in return ');
      if(timer){

        clearInterval(timer)
      }
    }
  },[isStart])

  return (

    <div>

      <div>count:{ count }</div>
      
      <div>step:{ step }</div>
      

      <button onClick={ ()=>{
        setIsStart(!isStart)

        
      }}> start </button>

      <button onClick={ ()=>{
        
        setStep(2); 


      }}> step </button>
    </div>
  )
}

export default App;
