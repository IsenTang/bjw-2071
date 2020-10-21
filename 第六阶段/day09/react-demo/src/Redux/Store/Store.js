import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducer/index';

export function configStore (){

   const middlewares = [ thunk ];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [ middlewareEnhancer ];

   const composedEnhancers = composeWithDevTools(...enhancers);

   const store = createStore(rootReducer,composedEnhancers);

   return store;
}

