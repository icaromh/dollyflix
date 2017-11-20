import {
  SELECT_SHOW,
  GET_SHOW
} from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_SHOW:
      return action.payload;
    case GET_SHOW:
      return action.payload.data;
    default:
      return state;
  }
}
