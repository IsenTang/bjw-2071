import React from 'react';

/* pages */
import Login from '../Feature/Login/Login';
import Menu from '../Feature/Menu/Menu';

export const routerConfig = [
   {
      path:'/login',
      component: Login
   },
   {
      path:'/menu',
      component: Menu
   },
   {
      path:'*',
      component:()=>{
         return (
            <div>404</div>
         );
      }
   },
];