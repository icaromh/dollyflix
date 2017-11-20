import {
  SELECT_SHOW,
  SELECT_EPISODE,
  GET_SHOW
} from '../actions/index';


export const currentShow = function(state = null, action) {
  switch (action.type) {

    case SELECT_SHOW:
      return action.payload;

    case GET_SHOW:
      return action.payload.data;

    default:
      return state;
  }
}


export const currentEpisode = function(state = null, action) {
  switch (action.type) {
    case SELECT_EPISODE:
      return action.payload

    default:
      return state;
  }
}
