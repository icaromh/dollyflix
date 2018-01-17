import {
  VOLUME_CHANGE,
} from '../actions/player'

const initialState = {
  volume: '0.5',
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case VOLUME_CHANGE: {
      return {
        ...state,
        volume: action.volume,
      }
    }
    default: {
      return state
    }
  }
}
