import { GET_SHOW, SELECT_SHOW } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_SHOW:
    case GET_SHOW:
      const data = action.payload.data || action.payload
      return data.episodes
        .map(ep => ep.season)
        .reduce((acc, el) => {
          return acc.indexOf(el) === -1 ? acc.concat(el) : acc;
        }, [])
        .sort();
    default:
      return state;
  }
}
