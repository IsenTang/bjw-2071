import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

/* hooks */
import { useMousePosition } from './Hook/useMousePosition'

/* components */
import Child from './Component/Child';
import Name from './Component/Name';

import Header from './Component/Header';
import Sider from './Component/Sider';
import A from './Component/A';
import B from './Component/B';


function App() {

  // let {x,y} = useMousePosition();

  let [ name , setName ] = useState('isen');

  let [ flag, setFlag ] = useState(false);

  return (
    // <div className="App">

    //   <div >

    //   <button onClick={()=>{

    //       setName('lucy')
    //       }}>click</button>
    //   </div>
       
      
    //    {/* <Child></Child> */}

    //    <Name name={name}></Name>


       
    // </div>
    <Router>

        <div className={'main'}>
          
          <button onClick={()=>{

            setFlag(!flag)
          }}>click</button>

          <Header></Header>


          <div className={'main-container'}>

              <Sider></Sider>
              
              <Switch>

                  <Route path='/a'>
                    { flag ? <A></A> : <Redirect to='/b'></Redirect>}
                  </Route>
                  <Route path='/b'>
                    <B></B>
                  </Route>
                  
              </Switch>
          </div>
        </div>
        
  
        
      

    </Router>


  );
}

export default App;
