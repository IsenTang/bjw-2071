import { userLogin,userLogout } from './action';

export function publicShow(dispatch){

    dispatch(userLogin())

    setTimeout(()=>{
    
        dispatch(userLogout());
    },5000)
}