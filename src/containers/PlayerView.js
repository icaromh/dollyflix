import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import VideoPlayer from '../components/VideoPlayer'
import Loader from '../components/Loader'
import NextEpisode from '../components/VideoPlayer/NextEpisode'

import { showFetchData, selectEpisode } from '../actions/show'
import { playerChangeVolume } from '../actions/player'

class PlayerView extends Component {
  componentWillMount() {
    const { slug, season, episode } = this.props.params
    if (Object.keys(this.props.show).length === 0) {
      this.props.fetchShowEpisode(slug, season, episode)
    }
  }

  handlePlayerVolumeChange = (volume) => {
    this.props.changeVolume(volume)
  }

  handlePlayerNextEpisodeClick = (episode) => {
    this.props.selectEpisode(episode)
  }

  renderContent = () => {
    const { show, episode, nextEpisode } = this.props

    const canonicalUrl = `https://flix.icaromh.com/show/${show.slug}/${episode.season}/${episode.number}`
    const options = {
      poster: episode.image,
      sources: [{
        src: `http://www.mitoseries.com/videozin/video-play.mp4/?contentId=${episode.id}`,
        type: 'video/mp4',
      }],
    }

    return (
      <div className="player-area">
        <Helmet title={`Dollyflix - assistir ${show.title}`}>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:type" content="video.episode" />
          <meta property="og:title" content={`${show.title} - ${episode.title}`} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={episode.image} />
        </Helmet>

        <VideoPlayer
          episodeId={episode.id}
          options={options}
          onVolumeChange={this.handlePlayerVolumeChange}
          volume={parseInt(this.props.player.volume, 10)}
        >
          <NextEpisode
            show={show}
            episode={nextEpisode}
            onNextEspisodeClick={this.handlePlayerNextEpisodeClick}
          />
        </VideoPlayer>
      </div>
    )
  }

  render() {
    const hasShow = Object.keys(this.props.show).length !== 0
    const hasEpisode = Object.keys(this.props.episode).length !== 0
    const hasNextEpisode = Object.keys(this.props.nextEpisode).length !== 0

    return (
      <Loader
        for={hasShow && hasEpisode && hasNextEpisode}
        render={this.renderContent}
      />
    )
  }
}

PlayerView.propTypes = {
  show: PropTypes.object,
  episode: PropTypes.object,
  nextEpisode: PropTypes.object,
  params: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  fetchShowEpisode: PropTypes.func.isRequired,
  changeVolume: PropTypes.func.isRequired,
  selectEpisode: PropTypes.func.isRequired,
}

PlayerView.defaultProps = {
  show: {},
  episode: {},
  nextEpisode: {},
}

const mapStateToProps = state => ({
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
  changeVolume: vol => dispatch(playerChangeVolume(vol)),
  selectEpisode: episode => dispatch(selectEpisode(episode)),
})

export default connect(mapStateToProps, mapDispathToProps)(PlayerView)
