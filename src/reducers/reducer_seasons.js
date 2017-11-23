import { GET_SHOW, SELECT_SHOW } from '../actions/index'

const sortCriteria = (a, b) => a - b

const selectShow = episodes => (
  episodes
    .map(ep => parseInt(ep.season, 10))
    .reduce((acc, el) => (acc.indexOf(el) === -1 ? acc.concat(el) : acc), [])
    .sort(sortCriteria)
)

export default function (state = [], action) {
  switch (action.type) {
    case SELECT_SHOW: {
      const data = action.payload.data || action.payload
      return selectShow(data.episodes)
    }
    case GET_SHOW: {
      const data = action.payload.data || action.payload
      return selectShow(data.episodes)
    }
    default: {
      return state
    }
  }
}
