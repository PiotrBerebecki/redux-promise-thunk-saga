// constants
const FETCH = 'promise/FETCH';

// actions
export function fetchData() {
  const request = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users);

  return {
    type: FETCH,
    payload: request,
  };
}

// reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return state;
  }
}
