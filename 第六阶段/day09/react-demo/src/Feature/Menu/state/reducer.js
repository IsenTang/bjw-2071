import * as ActionType from '../../../Redux/ActionType';

const initialState = { list:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.LOAD_SHOP:

      return {
         ...state,
         list: payload.data.list
      };
   default:
      return state;
   }
};