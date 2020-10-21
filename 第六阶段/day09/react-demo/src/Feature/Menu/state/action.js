import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/menu';

export function loadShop (){

   return async (dispatch)=>{

      dispatch({ type: ActionType.SHOW_LOADING });

      const { list } = await loadShopList();

      dispatch({ type: ActionType.LOAD_SHOP, data: { list } });

      dispatch({ type: ActionType.HIDE_LOADING });
   };
}