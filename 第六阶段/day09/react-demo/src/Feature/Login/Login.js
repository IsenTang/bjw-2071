import React, { useEffect } from 'react';
import request from '../../Common/request';

import './login.css';
export default function Login () {

   useEffect(async ()=>{

      const result = await request({
         url:     'http://49.235.98.65:3000/shop/shopList',
         method:  'get'
      });

      console.log(result);
   },[]);
   return (
      <div>
            Login
      </div>
   );
}
