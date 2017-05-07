import { createStore, combineReducers } from 'redux';
import reducer from './views/promise/promise';

const rootReducer = combineReducers({
  promise: reducer,
});

const store = createStore(rootReducer);

export default store;
