import { combineReducers } from 'redux';
import SerieReducer from './reducerSerie';
import SearchReducer from './reducer_search';
import SeasonReducer from './reducer_seasons';

import { currentShow, currentEpisode } from './showReducer'

const rootReducer = combineReducers({
  series: SerieReducer,
  search: SearchReducer,
  currentShow,
  currentEpisode,
  seasons: SeasonReducer,
});

export default rootReducer;
