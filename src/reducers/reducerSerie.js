import { FETCH_SHOWS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SHOWS:
      return action.payload.data;
    default:
      return state;
  }
}
