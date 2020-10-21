import React,{ useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import _, { set } from 'lodash';
import './menu.css';

/* actions */
import { loadShop } from './state/action';

export default function Menu () {

   const dispatch = useDispatch();

   const menu = useSelector(state=>state.menu);

   useEffect(() => {

      dispatch(loadShop());

   }, []);

   function renderMenu (){

      return _.map(menu.list,(item)=>{

         return (
            <div key={ Math.random() }> { item._id }</div>
         );
      });
   }

   return (
      <div>
            Menu
         <div>

            { renderMenu() }
         </div>
      </div>
   );
}
