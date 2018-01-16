import { API_URL } from '../constants'

export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE'

export const showHasErrored = bool => ({
  type: FETCH_SEARCH_FAILURE,
  hasErrored: bool,
})

export const searchIsLoading = bool => ({
  type: FETCH_SEARCH_REQUEST,
  isLoading: bool,
})

export const searchFetchDataSuccess = (term, results) => ({
  type: FETCH_SEARCH_SUCCESS,
  results,
  term,
})

export function searchShowFetchData(term) {
  const callUrl = `${API_URL}/search/?q=${term}`

  return (dispatch) => {
    dispatch(searchIsLoading(true))
    fetch(callUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(searchIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(items => dispatch(searchFetchDataSuccess(term, items)))
      .catch(() => dispatch(showHasErrored(true)))
  }
}
