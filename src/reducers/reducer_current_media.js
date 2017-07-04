import {
  SELECT_MEDIA,
  GET_SERIE
} from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_MEDIA:
      return action.payload;
    case GET_SERIE:
      return action.payload.data;
    default:
      return state;
  }
}
