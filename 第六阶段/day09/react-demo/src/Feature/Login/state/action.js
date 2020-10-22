import * as ActionType from '../../../Redux/ActionType';
import { login } from '../../../Request/login';

export function toMenu (history){

   return async (dispatch)=>{

      try{
         dispatch({ type:ActionType.SHOW_LOADING });

         await login({ username:'jkljkl',password:'jkljkl' });

         history.push('/menu');
      }catch(error){
         dispatch({ type: ActionType.SHOW_MODAL,data:{ message: error.message } });
      }finally{
         dispatch({ type:ActionType.HIDE_LOADING });
      }

   };
}