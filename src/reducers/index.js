import { combineReducers } from 'redux';
import SerieReducer from './reducerSerie';
import SearchReducer from './reducer_search';
import SeasonReducer from './reducer_seasons';
import currentMediaReducer from './reducer_current_media'

const rootReducer = combineReducers({
  series: SerieReducer,
  search: SearchReducer,
  currentMedia: currentMediaReducer,
  seasons: SeasonReducer,
});

export default rootReducer;
