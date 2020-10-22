import request from '../Common/request';
import { host } from '../Common/config';

export async function login (data){

   const result = await request({
      // url:     'http://49.235.98.65:3000/shop/shopList',
      url:`${host}/user/login`,
      method:  'post',
      data
   });

   return result;
}