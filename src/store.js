import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import promiseReducer from './views/promise/promise';
import thunkReducer from './views/thunk/thunk';
import sagaReducer from './views/saga/saga';

import { mySaga } from './views/saga/saga';

const rootReducer = combineReducers({
  promise: promiseReducer,
  thunk: thunkReducer,
  saga: sagaReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(
  promiseMiddleware,
  thunkMiddleware,
  sagaMiddleware
)(createStore)(rootReducer);

sagaMiddleware.run(mySaga);

export default store;
