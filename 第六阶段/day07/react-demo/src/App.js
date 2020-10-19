import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

/* hooks */
import { useMousePosition } from './Hook/useMousePosition'

/* components */
import Child from './Component/Child';
import Name from './Component/Name';

function App() {

  // let {x,y} = useMousePosition();

  let [ name , setName ] = useState('isen');

  return (
    <div className="App">

      <div className={'test'}></div>
       
      <button onClick={()=>{

      setName('lucy')
      }}>click</button>
       {/* <Child></Child> */}

       <Name name={name}></Name>

       
    </div>
  );
}

export default App;
