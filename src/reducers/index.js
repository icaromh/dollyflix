import { combineReducers } from 'redux'

import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  selectItem,
  selectEpisode,
  showHasErrored,
  showIsLoading,
} from './showReducer'

import search from './searchReducer'

import player from './playerReducer'

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,

  currentItem: selectItem,
  currentEpisode: selectEpisode,

  showHasErrored,
  showIsLoading,

  search,

  player,
})

export default rootReducer
