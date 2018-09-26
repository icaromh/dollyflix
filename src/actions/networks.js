import { API_URL } from '../constants'

export const FETCH_NETWORKS_REQUEST = 'FETCH_NETWORKS_REQUEST'
export const FETCH_NETWORKS_SUCCESS = 'FETCH_NETWORKS_SUCCESS'
export const FETCH_NETWORKS_FAILURE = 'FETCH_NETWORKS_FAILURE'

export const networksHasErrored = bool => ({
  type: FETCH_NETWORKS_FAILURE,
  hasErrored: bool,
})

export const networksIsLoading = bool => ({
  type: FETCH_NETWORKS_REQUEST,
  isLoading: bool,
})

export const networksFetchDataSuccess = items => ({
  type: FETCH_NETWORKS_SUCCESS,
  items,
})

export function networksFetchData() {
  const callUrl = `${API_URL}/networks`

  return (dispatch) => {
    dispatch(networksIsLoading(true))
    fetch(callUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(networksIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(networks => dispatch(networksFetchDataSuccess(networks)))
      .catch(() => dispatch(networksHasErrored(true)))
  }
}