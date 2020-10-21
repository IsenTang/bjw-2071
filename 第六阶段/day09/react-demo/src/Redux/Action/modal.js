import * as ActionType from '../ActionType';

export function showModal ({ message }){

   return (dispatch) =>{

      dispatch({ type:ActionType.SHOW_MODAL, data:{ message } });
   };
}

export function hideModal ({ message }){

   return (dispatch) =>{

      dispatch({ type:ActionType.HIDE_MODAL });
   };
}