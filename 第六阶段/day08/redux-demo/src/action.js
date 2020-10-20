import * as ActionType from './Redux/ActionType'

export function userLogin(){

    return { type: ActionType.USER_LOGIN }
}


export function userLogout(){

    return { type: ActionType.USER_LOGOUT }
}