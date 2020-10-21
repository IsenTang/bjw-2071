import * as ActionType from '../ActionType';

const initialState = { isShow: false,message:'' };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.SHOW_MODAL:

      return {
         ...state,
         isShow: true,
         message: payload.data.message
      };
   case ActionType.HIDE_MODAL:

      return {
         ...state,
         isShow: false
      };
   default:
      return state;
   }
};