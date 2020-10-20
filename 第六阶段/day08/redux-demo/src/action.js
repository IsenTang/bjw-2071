import * as ActionType from './Redux/ActionType'

export function userLogin(){

    return (dispatch, getState) => {


        dispatch({ type: ActionType.USER_LOGIN })

        setTimeout(()=>{

            dispatch({type: ActionType.USER_LOGOUT});

        },5000)
    };
    
}


export function userLogout(){

    return { type: ActionType.USER_LOGOUT }
}


export function sendRequest(){

    return async(dispatch, getState) => {

        dispatch({ type: ActionType.SHOW_LOADING })

        dispatch({ type: ActionType.USER_LOGIN })

        await sleep(2000);

        dispatch({ type: ActionType.USER_LOGOUT, data:{test:2222222222} });

        dispatch({ type: ActionType.HIDE_LOADING })
    };
    
}

function sleep(time){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve();   
        },time)
    })
}