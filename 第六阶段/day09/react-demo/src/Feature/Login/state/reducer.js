import { USER_LOGIN, USER_LOGOUT } from '../../../Redux/ActionType';

const initialState = { isLogin: false,data:{ test: 123 } };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case USER_LOGIN:

      return {
         ...state,
         isLogin: true
      };
   case USER_LOGOUT:

      console.log(payload);
      return {
         ...state,
         isLogin: false,
         data:payload.data
      };
   default:
      return state;
   }
};