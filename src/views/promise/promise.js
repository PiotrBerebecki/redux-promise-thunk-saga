// constants
const FETCH = 'promise/FETCH';

// actions
export function fetchData() {
  return {
    type: FETCH,
    payload: [{ name: 'Pete3' }, { name: 'Mike4' }],
  };
}

// reducer
export default function reducer(
  state = [{ name: 'Ann1' }, { name: 'Kay2' }],
  action
) {
  switch (action.type) {
    case FETCH:
      return [...state, action.payload];
    default:
      return state;
  }
}
