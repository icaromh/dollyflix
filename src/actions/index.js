import axios from 'axios';

const ROOT_URL = `https://dollyflix-api.herokuapp.com`;

export const FETCH_SERIE = 'FETCH_SERIE';
export const SEARCH_TERM = 'SEARCH_TERM';
export const SELECT_MEDIA = 'SELECT_MEDIA';

export function searchTerm(serie) {
  return {
    type: SEARCH_TERM,
    payload: serie,
  }
}

export function fetchSerie(serie = "") {
  let url = `${ROOT_URL}`;
  if (serie !== "") {
    url += `/search/?q=${serie}`;
  }else{
    url += '/series/1';
  }

  const request = axios.get(url);

  return {
    type: FETCH_SERIE,
    payload: request,
  };
}

export function selectMedia(media) {
  return {
    type: SELECT_MEDIA,
    payload: media,
  };
}
