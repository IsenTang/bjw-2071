import React from 'react';
import { useDispatch } from 'react-redux';
// import { loadShopList } from '../../Request/menu';
import './login.css';

/* actions */
import { showModal } from '../../Redux/Action/modal';

export default function Login () {

   const dispatch = useDispatch();

   function handleClick (message){

      dispatch(showModal({ message }));
   }
   return (
      <div>
            Login

         <div>
            <button onClick={ ()=> {handleClick('A');} }>A</button>
            <button onClick={ ()=> {handleClick('B');} }>B</button>
            <button onClick={ ()=> {handleClick('C');} }>C</button>
         </div>
      </div>
   );
}
