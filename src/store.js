import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './views/promise/promise';

const rootReducer = combineReducers({
  promise: reducer,
});

const store = applyMiddleware(promiseMiddleware)(createStore)(rootReducer);

export default store;
