// constants
const FETCH = 'promise/FETCH';

// action called by the connected component
export function fetchData() {
  const request = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users.slice(0, 10))
    .catch(err => []);

  return dispatchAction(request);
}

function dispatchAction(promise) {
  return {
    type: FETCH,
    payload: promise,
  };
}

// reducer
export default function promiseReducer(state = [], action) {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return state;
  }
}
