import request from '../Common/request';

export async function loadShopList (){

   const result = await request({
      // url:     'http://49.235.98.65:3000/shop/shopList',
      url:'http://49.235.98.65:3000/admin/shopList',
      method:  'get'
   });

   return result;
}