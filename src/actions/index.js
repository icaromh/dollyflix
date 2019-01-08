import axios from 'axios'

import { API_URL } from '../constants'

export const FETCH_SHOWS = 'FETCH_SHOWS'
export const GET_SHOW = 'GET_SHOW'
export const SEARCH_TERM = 'SEARCH_TERM'
export const DO_SEARCH_SHOWS = 'DO_SEARCH_SHOWS'

export const searchTerm = serie => ({
  type: SEARCH_TERM,
  payload: serie,
})

export const searchShow = (show) => {
  const url = `${API_URL}/search?q=${show}`
  const request = axios.get(url)

  return {
    type: DO_SEARCH_SHOWS,
    payload: request,
  }
}
