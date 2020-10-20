import { USER_LOGIN, USER_LOGOUT } from '../ActionType';

const initialState = { isLogin: false,test:123 };

export default (state = initialState, payload) => {

    switch (payload.type) {
        case USER_LOGIN:
            
            return {
                ...state,
                isLogin: true
            }
        case USER_LOGOUT:
            
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
};