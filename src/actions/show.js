import { API_URL } from '../constants'

export const FETCH_SHOW_REQUEST = 'FETCH_SHOW_REQUEST'
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS'
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE'

export const SELECT_SHOW = 'SELECT_SHOW'
export const SELECT_EPISODE = 'SELECT_EPISODE'

export const FAVORITE_SHOW = 'FAVORITE_SHOW'
export const UNFAVORITE_SHOW = 'UNFAVORITE_SHOW'

export const showHasErrored = bool => ({
  type: FETCH_SHOW_FAILURE,
  hasErrored: bool,
})

export const showIsLoading = bool => ({
  type: FETCH_SHOW_REQUEST,
  isLoading: bool,
})

export const showFetchDataSuccess = (item, season, episode) => ({
  type: FETCH_SHOW_SUCCESS,
  item,
  season,
  episode,
})

export const selectShow = show => ({
  type: SELECT_SHOW,
  payload: show,
})

export const doFavoriteShow = show => ({
  type: FAVORITE_SHOW,
  show,
})

export const doUnfavoriteShow = show => ({
  type: UNFAVORITE_SHOW,
  show,
})

export function showFetchData(slug, season, episode) {
  const callUrl = `${API_URL}/show/${slug}`

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
      .then(show => dispatch(showFetchDataSuccess(show, season, episode)))
      .catch(() => dispatch(showHasErrored(true)))
  }
}

export const selectEpisode = episode => ({
  type: SELECT_EPISODE,
  payload: episode,
})
