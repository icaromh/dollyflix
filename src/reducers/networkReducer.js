import {
  FETCH_NETWORKS_REQUEST,
  FETCH_NETWORKS_SUCCESS,
  FETCH_NETWORKS_FAILURE,
} from '../actions/networks'

export function networksHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_NETWORKS_FAILURE:
      return action.hasErrored

    default:
      return state
  }
}

export function networksIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_NETWORKS_REQUEST:
      return action.isLoading

    default:
      return state
  }
}

export function networks(state = [], action) {
  switch (action.type) {
    case FETCH_NETWORKS_SUCCESS:
      return action.items

    default:
      return state
  }
}
