import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchShow, selectEpisode } from '../actions'
import VideoPlayer from '../components/VideoPlayer'
import Loader from '../components/Loader'

class PlayerView extends Component {
  constructor(props){
    super(props)

    this.state = {
      episode: props.currentEpisode
    }
  }

  componentWillReceiveProps(nextProps){
    const {season, episode} = this.props.params

    const filterSeason = ep => parseInt(ep.season, 10) === parseInt(season, 10)
    const filterEpisode = ep => parseInt(ep.number, 10) === parseInt(episode, 10)

    if (nextProps.currentShow) {
      const currentEpisode = nextProps.currentShow.episodes
        .filter(filterSeason)
        .filter(filterEpisode)

      if(currentEpisode.length === 1){
        this.setState({episode: currentEpisode[0]})
      }
    }
  }

  componentWillMount(){
    if (!this.props.currentShow) {
      this.props.fetchShow(this.props.params.slug)
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
        type: 'video/mp4'
      }]
    }

    return (
      <div className="player-area">
        <Helmet title={`Dollyflix - assistir ${show.title}`}>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:type" content="video.episode" />
          <meta property="og:title" content={show.title + ' - ' + episode.title} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={episode.image} />
        </Helmet>

        <VideoPlayer options={options} />
      </div>
    )
  }

  render () {
    const episode = this.state.episode
    return (<Loader for={episode} render={this.renderContent} />)
  }
}

function mapStateToProps({ currentShow, currentEpisode }) {
  return { currentShow, currentEpisode }
}

export default connect(mapStateToProps, {
  fetchShow,
  selectEpisode
})(PlayerView)
