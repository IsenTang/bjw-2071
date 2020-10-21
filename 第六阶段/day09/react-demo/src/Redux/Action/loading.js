import * as ActionType from '../ActionType';

export function showLoding (){

   return (dispatch) =>{

      dispatch({ type:ActionType.SHOW_LOADING });
   };
}

export function hideLoding (){

   return (dispatch) =>{

      dispatch({ type:ActionType.HIDE_LOADING });
   };
}