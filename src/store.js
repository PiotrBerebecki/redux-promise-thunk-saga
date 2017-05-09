import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import promiseReducer from './views/promise/promise';
import thunkReducer from './views/thunk/thunk';

const rootReducer = combineReducers({
  promise: promiseReducer,
  thunk: thunkReducer,
});

const store = applyMiddleware(promiseMiddleware, thunkMiddleware)(createStore)(
  rootReducer
);

export default store;
