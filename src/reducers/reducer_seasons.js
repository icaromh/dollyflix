import { GET_SHOW, SELECT_SHOW } from '../actions/index';

const sortCriteria = (a,b) => a - b;

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_SHOW:
    case GET_SHOW:
      const data = action.payload.data || action.payload
      return data.episodes
        .map(ep => parseInt(ep.season, 10))
        .reduce((acc, el) => {
          return acc.indexOf(el) === -1 ? acc.concat(el) : acc;
        }, [])
        .sort(sortCriteria);
    default:
      return state;
  }
}
