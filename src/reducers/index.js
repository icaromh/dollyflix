import { combineReducers } from 'redux'

import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  selectItem,
  selectEpisode,
  showHasErrored,
  showIsLoading,
  favoriteShowItems,
  currentMedia,
} from './showReducer'

import search from './searchReducer'

import player from './playerReducer'

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,

  favoriteItems: favoriteShowItems,

  currentItem: selectItem,
  currentEpisode: selectEpisode,
  currentMedia,

  showHasErrored,
  showIsLoading,

  search,

  player,
})

export default rootReducer
