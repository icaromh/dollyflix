import {
  SEARCH_TERM,
  FETCH_SHOWS,
} from '../actions/index'

const initialState = { term: null, loading: false }

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_TERM:
      return { term: action.payload, loading: true }
    case FETCH_SHOWS:
      return { ...state, loading: false }
    default:
      return state
  }
}
