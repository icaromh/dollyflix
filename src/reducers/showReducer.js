import {
  SELECT_SHOW,
  FETCH_SHOW_REQUEST,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE,
} from '../actions/show'

import {
  FETCH_SHOWS_REQUEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_FAILURE,
} from '../actions/shows'

import {
  FETCH_SHOWS_REQUEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_FAILURE,
} from '../actions/shows'


export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_SHOWS_FAILURE:
      return action.hasErrored

    default:
      return state
  }
}

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_SHOWS_FAILURE:
      return action.hasErrored

    default:
      return state
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_SHOWS_REQUEST:
      return action.isLoading

    default:
      return state
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case FETCH_SHOWS_SUCCESS:
      return action.items

    default:
      return state
  }
}

export function selectItem(state = {}, action) {
  switch (action.type) {
    case FETCH_SHOW_SUCCESS: {
      return { ...action.item }
    }
    case SELECT_SHOW: {
      return action.payload
    }
    default: {
      return state
    }

  }
}

export function showHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_SHOW_FAILURE:
      return action.hasErrored

    default:
      return state
  }
}

export function showIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_SHOW_REQUEST:
      return action.isLoading

    default:
      return state
  }
}
