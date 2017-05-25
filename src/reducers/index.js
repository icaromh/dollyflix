import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';

const rootReducer = combineReducers({
  movies: MovieReducer,
});

export default rootReducer;
