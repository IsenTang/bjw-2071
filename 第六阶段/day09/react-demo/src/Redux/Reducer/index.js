import { combineReducers } from 'redux';

/* global */
import loading from './loading';

/* page */
import login from '../../Feature/Login/state/reducer';

const rootReducer = combineReducers({
   login,
   loading
});

export default rootReducer;