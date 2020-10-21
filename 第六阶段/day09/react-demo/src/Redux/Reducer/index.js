import { combineReducers } from 'redux';

/* global */
import loading from './loading';
import modal from './modal';

/* page */
import login from '../../Feature/Login/state/reducer';
import menu from '../../Feature/Menu/state/reducer';

const rootReducer = combineReducers({
   login,
   menu,
   modal,
   loading
});

export default rootReducer;