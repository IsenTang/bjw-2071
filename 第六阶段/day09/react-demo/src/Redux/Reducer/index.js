import { combineReducers } from 'redux';

import login from './login';
import loading from './loading';

const rootReducer = combineReducers({
   login,
   loading
});

export default rootReducer;