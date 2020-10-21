import { combineReducers } from 'redux';

/* global */
import loading from './loading';
import modal from './modal';

/* page */
import login from '../../Feature/Login/state/reducer';

const rootReducer = combineReducers({
   login,
   modal,
   loading
});

export default rootReducer;