import { FETCH_SERIE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_SERIE:
    return action.payload.data;
  }
  return state;
}
