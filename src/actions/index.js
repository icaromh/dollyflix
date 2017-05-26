import axios from 'axios';

const ROOT_URL = `https://api.torrentsapi.com/?cb=&sort=year`;

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const SEARCH_TERM = 'SEARCH_TERM';
export const SELECT_MEDIA = 'SELECT_MEDIA';

export function searchTerm(movie) {
  return {
    type: SEARCH_TERM,
    payload: movie,
  }
}

export function fetchMovie(movie) {
  const url = `${ROOT_URL}&keywords=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request,
  };
}

export function selectMedia(media) {
  return {
    type: SELECT_MEDIA,
    payload: media,
  };
}
