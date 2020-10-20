import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './App.css';

import { userLogin,userLogout,sendRequest } from './action';


/* component */
import Loading from './Component/Loading/Loading';

function App() {

  let isLogin = useSelector(state => state.login.isLogin)
  let value = useSelector(state => state.login.data.test)

  // let isLogin = useSelector((state)=>{

  //   console.log(state);
  //   return state.isLogin;
  // })
  
  let dispatch = useDispatch();

  return (
    <div className="App">
        { isLogin ? 'app' : ''}

        value:{ value }
        <div>
          <button onClick={()=>{

             dispatch(userLogin());

          }}>login</button>

          <button onClick={()=>{

              dispatch(userLogout())

          }}>logout</button>


          <button onClick={()=>{

            dispatch(sendRequest());

          }}>loading</button>
        </div>

        <Loading/>
    </div>
  );
}

export default App;
