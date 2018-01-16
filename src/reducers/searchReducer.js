import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
} from '../actions/search'

const initialState = {
  term: '',
  isLoading: false,
  results: [],
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST: {
      return {
        ...state,
        results: [],
        isLoading: action.isLoading,
      }
    }

    case FETCH_SEARCH_FAILURE: {
      return {
        ...state,
        results: [],
        isLoading: false,
      }
    }

    case FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.results,
        term: action.term,
        isLoading: false,
      }
    }

    default: {
      return state
    }
  }
}
