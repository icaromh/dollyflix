import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { selectEpisode } from '../actions/show'

import VideoPlayer from '../components/VideoPlayer'
import Loader from '../components/Loader'

class PlayerView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      episode: props.currentEpisode,
    }
  }

  componentWillMount() {
    if (!this.props.currentShow) {
      this.props.fetchShow(this.props.params.slug)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { season, episode } = this.props.params

    const filterSeason = ep => parseInt(ep.season, 10) === parseInt(season, 10)
    const filterEpisode = ep => parseInt(ep.number, 10) === parseInt(episode, 10)

    if (nextProps.currentShow) {
      const currentEpisode = nextProps.currentShow.episodes
        .filter(filterSeason)
        .filter(filterEpisode)

      if (currentEpisode.length === 1) {
        this.setState({ episode: currentEpisode[0] })
      }
    }
  }

  renderContent = () => {
    const { episode } = this.state
    const show = this.props.currentShow
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

        <VideoPlayer options={options} />
      </div>
    )
  }

  render() {
    const episode = this.state.episode
    return (<Loader for={episode} render={this.renderContent} />)
  }
}

PlayerView.propTypes = {
  currentEpisode: PropTypes.object,
  currentShow: PropTypes.object,
  fetchShow: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
}

PlayerView.defaultProps = {
  currentEpisode: {},
  currentShow: {},
}

const mapStateToProps = ({ currentShow, currentEpisode }) => ({ currentShow, currentEpisode })
const mapDispathToProps = () => ({ selectEpisode })

export default connect(mapStateToProps, mapDispathToProps)(PlayerView)
