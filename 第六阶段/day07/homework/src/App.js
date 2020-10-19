import React,{useState} from 'react';
import './App.css';

import {
  BrowserRouter as Router // hash router 与 browser router
} from 'react-router-dom';

/* components */
import Header from './Component/Header/Header';
import Sider  from './Component/Sider/Sider';
import Content from './Component/Content/Content';

import Modal from './Component/Modal/Modal'

function App() {

  let [isShow , setIsShow] = useState(false);

  return (
    <Router>
      
      <div className="App">
          
          <Header></Header>

          <div className='container'>
            <Sider setIsShow={ setIsShow }></Sider>

            <Content></Content>
          </div>

          <Modal isShow={ isShow } setIsShow={ setIsShow }/>
      </div>

      
    </Router>
  );
}

export default App;
