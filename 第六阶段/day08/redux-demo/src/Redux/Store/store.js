import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from '../Reducer/index';

export function configStore(){

    const enhancers = [ ];

    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer,composedEnhancers);

    return store;
}


