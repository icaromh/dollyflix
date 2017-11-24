import { API_URL } from '../constants'

export const FETCH_SHOW_REQUEST = 'FETCH_SHOW_REQUEST'
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS'
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE'

export const SELECT_SHOW = 'SELECT_SHOW'
export const SELECT_EPISODE = 'SELECT_EPISODE'

export const showHasErrored = bool => ({
  type: FETCH_SHOW_FAILURE,
  hasErrored: bool,
})

export const showIsLoading = bool => ({
  type: FETCH_SHOW_REQUEST,
  isLoading: bool,
})

export const showFetchDataSuccess = item => ({
  type: FETCH_SHOW_SUCCESS,
  item,
})

export const selectShow = show => ({
  type: SELECT_SHOW,
  payload: show,
})

export function showFetchData(slug) {
  const callUrl = `${API_URL}/serie/${slug}`

  return (dispatch) => {
    dispatch(showIsLoading(true))

    fetch(callUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(showIsLoading(false))

      return response
    })
    .then(response => response.json())
    .then(items => dispatch(showFetchDataSuccess(items)))
    .catch(() => dispatch(showHasErrored(true)))
  }
}

export const selectEpisode = episode => ({
  type: SELECT_EPISODE,
  payload: episode,
})
