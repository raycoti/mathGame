import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));

if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, applyMiddleware( thunkMiddleware));
}

export default store;
