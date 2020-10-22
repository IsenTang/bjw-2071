import React from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber } from 'antd';
// import { loadShopList } from '../../Request/menu';
import './login.css';

/* actions */
import { showModal } from '../../Redux/Action/modal';
import { toMenu } from './state/action';
import { useHistory } from 'react-router-dom';

export default function Login () {

   const dispatch = useDispatch();

   const history = useHistory();

   function handleClick (message){

      dispatch(showModal({ message }));
   }

   function login (){

      dispatch(toMenu(history));
   }

   function onChange (value) {
      console.log('changed', value);
   }

   return (
      <div>
            Login

         <div>
            <button onClick={ ()=> {handleClick('A');} }>A</button>
            <button onClick={ ()=> {handleClick('B');} }>B</button>
            <button onClick={ ()=> {handleClick('C');} }>C</button>
         </div>

         <div>
            <InputNumber min={ 1 } max={ 10 } defaultValue={ 3 } onChange={ onChange } />
            <button onClick={ login }>login</button>
         </div>
      </div>
   );
}
