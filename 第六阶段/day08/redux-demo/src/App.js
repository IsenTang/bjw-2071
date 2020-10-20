import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './App.css';

function App() {

  let isLogin = useSelector(state => state.isLogin)

  // let isLogin = useSelector((state)=>{

  //   return state.isLogin;
  // })

  let dispatch = useDispatch();

  return (
    <div className="App">
        { isLogin ? 'app' : ''}
        <div>
          <button onClick={()=>{

              dispatch({ type:'USER_LOGIN' })

          }}>login</button>

          <button onClick={()=>{

              dispatch({ type:'USER_LOGOUT' })

          }}>logout</button>
        </div>
    </div>
  );
}

export default App;
