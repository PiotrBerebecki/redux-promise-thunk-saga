// constants
const FETCH = 'thunk/FETCH';

// actions
export function fetchData() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(users => {
        return dispatch({
          type: FETCH,
          payload: users.slice(0, 10),
        });
      });
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
