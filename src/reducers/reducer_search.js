import {
  DO_SEARCH_SHOWS,
  FETCH_SHOWS,
} from '../actions/index'

const initialState = { term: '', loading: false, results: [] }

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case DO_SEARCH_SHOWS: {
      return {
        ...state,
        results: action.payload.data,
        loading: true,
      }
    }
    case FETCH_SHOWS: {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
