import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk';
import thunk from './thunk.js';

import reducer from './store.js';

let reducers = {
  reducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();