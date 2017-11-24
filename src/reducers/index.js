import { combineReducers } from 'redux'

import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  selectItem,
  showHasErrored,
  showIsLoading,
} from './showReducer'

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentItem: selectItem,

  showHasErrored,
  showIsLoading,
})

export default rootReducer
