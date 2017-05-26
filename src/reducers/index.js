import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';
import SearchReducer from './reducer_search';
import currentMediaReducer from './reducer_current_media'

const rootReducer = combineReducers({
  movies: MovieReducer,
  search: SearchReducer,
  currentMedia: currentMediaReducer,
});

export default rootReducer;
