import { API_URL } from '../constants'

export const FETCH_SHOWS_REQUEST = 'FETCH_SHOWS_REQUEST'
export const FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS'
export const FETCH_SHOWS_FAILURE = 'FETCH_SHOWS_FAILURE'

export const itemsHasErrored = bool => ({
  type: FETCH_SHOWS_FAILURE,
  hasErrored: bool,
})

export const itemsIsLoading = bool => ({
  type: FETCH_SHOWS_REQUEST,
  isLoading: bool,
})

export const itemsFetchDataSuccess = items => ({
  type: FETCH_SHOWS_SUCCESS,
  items,
})

export function itemsFetchData(url = '/shows/1') {
  const callUrl = `${API_URL}${url}`

  return (dispatch) => {
    dispatch(itemsIsLoading(true))

    fetch(callUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
  }
}
