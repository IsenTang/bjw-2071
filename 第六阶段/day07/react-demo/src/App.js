import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

      <ul>
        <li>
          <Link to={'/home'}>home</Link>
        </li>
        <li>
          <Link to={'/name'}>name</Link>
        </li>
      </ul>

      <Switch>
          <Route path="/home">
            <Child />
          </Route>

          <Route path="/name">
            <Name name={name}/>
          </Route>
      </Switch>

    </Router>


  );
}

export default App;
