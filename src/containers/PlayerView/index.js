import { connect } from 'react-redux'

import {
  showFetchData,
  selectEpisode,
  showFetchMedia,
} from '../../actions/show'
import { playerChangeVolume } from '../../actions/player'

import PlayerView from './PlayerView'

const mapStateToProps = state => ({
  media: state.currentMedia,
  show: state.currentItem,
  episode: state.currentEpisode,
  nextEpisode: (() => {
    if (state.currentItem.episodes && state.currentEpisode.season) {
      const filterSeason = ep => parseInt(ep.season, 10) === parseInt(state.currentEpisode.season, 10)
      const filterNextEpisode = ep => parseInt(ep.number, 10) === (parseInt(state.currentEpisode.number, 10) + 1)

      const nextEpisode = state.currentItem.episodes
        .filter(filterSeason)
        .filter(filterNextEpisode)

      return nextEpisode[0]
    }

    return {}
  })(),
  player: state.player,
})

const mapDispathToProps = dispatch => ({
  fetchShowEpisode: (slug, season, episode) => dispatch(showFetchData(slug, season, episode)),
  fetchShowMedia: (slug, season, episode) => dispatch(showFetchMedia(slug, season, episode)),
  changeVolume: vol => dispatch(playerChangeVolume(vol)),
  selectEpisode: episode => dispatch(selectEpisode(episode)),
})

export default connect(mapStateToProps, mapDispathToProps)(PlayerView)
