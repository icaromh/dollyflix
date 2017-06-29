import { SELECT_MEDIA } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_MEDIA:
      return action.payload;
    default:
      return state;  
  }
}
