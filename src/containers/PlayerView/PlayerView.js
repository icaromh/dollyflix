import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import VideoPlayer from '../../components/VideoPlayer'
import Loader from '../../components/Loader'
import NextEpisode from '../../components/VideoPlayer/NextEpisode'


class PlayerView extends Component {
  componentWillMount() {
    const { slug, season, episode } = this.props.params
    if (Object.keys(this.props.show).length === 0) {
      this.props.fetchShowEpisode(slug, season, episode)
    }
    this.props.fetchShowMedia(slug, season, episode)
  }

  handlePlayerVolumeChange = (volume) => {
    this.props.changeVolume(volume)
  }

  handlePlayerNextEpisodeClick = (episode) => {
    this.props.selectEpisode(episode)
  }

  renderContent = () => {
    const { show, episode, nextEpisode, media } = this.props

    const canonicalUrl = `https://flix.icaromh.com/show/${show.slug}/${episode.season}/${episode.number}`
    const options = {
      poster: episode.image,
      sources: media,
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
    const hasMedia = Object.keys(this.props.media).length !== 0

    return (
      <Loader
        for={hasShow && hasMedia && hasEpisode && hasNextEpisode}
        render={this.renderContent}
      />
    )
  }
}

PlayerView.propTypes = {
  media: PropTypes.array,
  show: PropTypes.object,
  episode: PropTypes.object,
  nextEpisode: PropTypes.object,
  params: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  fetchShowEpisode: PropTypes.func.isRequired,
  fetchShowMedia: PropTypes.func.isRequired,
  changeVolume: PropTypes.func.isRequired,
  selectEpisode: PropTypes.func.isRequired,
}

PlayerView.defaultProps = {
  show: {},
  episode: {},
  nextEpisode: {},
  media: [],
}

export default PlayerView
