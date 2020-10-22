import request from '../Common/request';
import { host } from '../Common/config';

export async function loadShopList (){

   const result = await request({
      url:     `${host}/shop/shopList`,
      // url:'http://49.235.98.65:3000/admin/shopList',
      method:  'get'
   });

   return result;
}