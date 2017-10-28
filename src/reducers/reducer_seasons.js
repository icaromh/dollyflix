import { GET_SERIE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case GET_SERIE:
      return action.payload.data.episodes
        .map(ep => ep.season)
        .reduce((acc, el) => {
          return acc.indexOf(el) === -1 ? acc.concat(el) : acc;
        }, [])
        .sort();
    default:
      return state;
  }
}
