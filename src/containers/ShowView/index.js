import { connect } from 'react-redux'

import {
  showFetchData,
  selectEpisode,
  doFavoriteShow,
  doUnfavoriteShow,
} from '../../actions/show'

import ShowView from './ShowView'

const mapStateToProps = state => ({
  showIsLoading: state.showIsLoading,
  show: state.currentItem,
  seasons: (() => {
    const sortCriteria = (a, b) => a - b
    const getSeasons = episodes => (
      episodes
        .map(ep => parseInt(ep.season, 10))
        .reduce((acc, el) => (acc.indexOf(el) === -1 ? acc.concat(el) : acc), [])
        .sort(sortCriteria)
    )
    return state.currentItem.episodes ? getSeasons(state.currentItem.episodes) : []
  })(),
  isFavoritedShow: (() =>
    state.favoriteItems.find(show => show.slug === state.currentItem.slug) !== undefined
  )(),
})

const mapDispatchToProps = dispatch => ({
  fetchShow: slug => dispatch(showFetchData(slug)),
  selectEpisode: episode => dispatch(selectEpisode(episode)),
  favoriteShow: show => dispatch(doFavoriteShow(show)),
  unfavoriteShow: show => dispatch(doUnfavoriteShow(show)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowView)
