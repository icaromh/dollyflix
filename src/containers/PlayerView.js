import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import VideoPlayer from '../components/VideoPlayer'
import Loader from '../components/Loader'

import { showFetchData } from '../actions/show'
import { playerChangeVolume } from '../actions/player'

class PlayerView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episode: props.episode,
    }
  }

  componentWillMount() {
    if (Object.keys(this.props.show).length === 0) {
      this.props.fetchShow(this.props.params.slug)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { season, episode } = this.props.params

    const filterSeason = ep => parseInt(ep.season, 10) === parseInt(season, 10)
    const filterEpisode = ep => parseInt(ep.number, 10) === parseInt(episode, 10)


    if (Object.keys(nextProps.show).length !== 0) {
      const currentEpisode = nextProps.show.episodes
        .filter(filterSeason)
        .filter(filterEpisode)

      if (currentEpisode.length === 1) {
        this.setState({ episode: currentEpisode[0] })
      }
    }
  }

  handlePlayerVolumeChange = (volume) => {
    this.props.changeVolume(volume)
  }

  renderContent = () => {
    const { episode } = this.state
    const show = this.props.show
    const canonicalUrl = `https://dollyflix.herokuapp.com/show/${show.slug}/${episode.season}/${episode.number}`
    const options = {
      poster: episode.image,
      sources: [{
        src: `https://www.blogger.com/video-play.mp4?contentId=${episode.id}`,
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
          options={options}
          onVolumeChange={this.handlePlayerVolumeChange}
          volume={this.props.player.volume}
        />
      </div>
    )
  }

  render() {
    const hasShow = Object.keys(this.props.show).length !== 0

    return (
      <Loader
        for={hasShow}
        render={this.renderContent}
      />
    )
  }
}

PlayerView.propTypes = {
  show: PropTypes.object,
  episode: PropTypes.object,
  fetchShow: PropTypes.func.isRequired,
  changeVolume: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
}

PlayerView.defaultProps = {
  show: {},
  episode: {},
}

const mapStateToProps = ({ currentItem, currentEpisode, player }) => ({
  show: currentItem,
  episode: currentEpisode,
  player,
})

const mapDispathToProps = dispatch => ({
  fetchShow: slug => dispatch(showFetchData(slug)),
  changeVolume: vol => dispatch(playerChangeVolume(vol)),
})

export default connect(mapStateToProps, mapDispathToProps)(PlayerView)
