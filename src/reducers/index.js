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

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,

  currentItem: selectItem,
  currentEpisode: selectEpisode,

  showHasErrored,
  showIsLoading,
})

export default rootReducer
