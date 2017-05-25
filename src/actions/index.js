import axios from 'axios';

const ROOT_URL = `http://api.torrentsapi.com/?cb=&sort=seeds`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movie) {
  const url = `${ROOT_URL}&keywords=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
