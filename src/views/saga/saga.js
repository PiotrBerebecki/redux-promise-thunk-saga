import { call, put, /*takeEvery,*/ takeLatest } from 'redux-saga/effects';

// constants
const FETCH = 'saga/FETCH';
const FETCH_SUCCESS = 'saga/FETCH_SUCCESS';
const FETCH_FAILED = 'saga/FETCH_FAILED';

// action called by the connected component
// component dispatches a plain Object action to the Store.
export function fetchData() {
  return {
    type: FETCH,
  };
}

// Saga generator function that watches for all FETCH
// actions and triggers the specified function
export function* mySaga() {
  yield takeLatest(FETCH, handleFetch);
}

// worker Saga: will be fired on FETCH actions
function* handleFetch() {
  try {
    const users = yield call(
      handleApiReqeust,
      'https://jsonplaceholder.typicode.com/users'
    );
    yield put({ type: FETCH_SUCCESS, payload: users });
  } catch (e) {
    yield put({ type: FETCH_FAILED, payload: [] });
  }
}

// function making the actual api call
function handleApiReqeust(url) {
  return fetch(url).then(res => res.json()).then(users => {
    return users.slice(0, 10);
  });
}

// reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_FAILED:
      return action.payload;
    default:
      return state;
  }
}
