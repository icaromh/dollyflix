import { FETCH_MOVIE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_MOVIE:
    return action.payload.data.MovieList;
  }
  return state;
}
