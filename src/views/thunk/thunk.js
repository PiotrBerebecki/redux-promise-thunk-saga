// constants
const FETCH = 'thunk/FETCH';

// action called by the connected component
export function fetchData() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => dispatch(dispatchAction(users.slice(0, 10))))
      .catch(err => []);
  };
}

function dispatchAction(users) {
  return {
    type: FETCH,
    payload: users,
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
