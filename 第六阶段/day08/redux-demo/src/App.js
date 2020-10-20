import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './App.css';

import { userLogin,userLogout } from './action';

function App() {

  let isLogin = useSelector(state => state.login.isLogin)

  // let isLogin = useSelector((state)=>{

  //   console.log(state);
  //   return state.isLogin;
  // })
  
  let dispatch = useDispatch();

  return (
    <div className="App">
        { isLogin ? 'app' : ''}
        <div>
          <button onClick={()=>{

              dispatch(userLogin())

          }}>login</button>

          <button onClick={()=>{

              dispatch(userLogout())

          }}>logout</button>
        </div>
    </div>
  );
}

export default App;
