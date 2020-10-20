import { createStore } from 'redux'

import reducer from '../Reducer/index';

export const store = createStore(reducer);

