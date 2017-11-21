import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getSerie, selectEpisode } from '../actions';
import VideoPlayer from '../components/VideoPlayer';
import Spinner from '../components/spinner';


class PlayerView extends Component {
  constructor(props){
    super(props);

    this.state = {
      number: props.params.episode,
      season: props.params.season,
      currentShow: props.currentShow,
      currentEpisode: props.currentEpisode,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentShow){
      this.setState({
        currentShow: nextProps.currentShow,
        currentEpisode: nextProps.currentEpisode
      });
    }
  }

  componentWillMount(){
    if(!this.props.currentShow){
      this.props.getSerie(this.props.params.slug)
    }
  }

  render() {
    const episode = this.state.currentEpisode;
    const show = this.state.currentShow;

    if(!episode) {
      return (
        <div className="container">
          <h1 className="page-title">
            Loading
          </h1>
          <Spinner />
        </div>
      );
    }


    const canonicalUrl = `https://dollyflix.herokuapp.com/player/${show.slug}/${episode.season}/${episode.number}`;
    const videoJsOptions = {
      autoplay: false,
      controls: true,
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

        <VideoPlayer { ...videoJsOptions } />
      </div>
    )

  }
}

function mapStateToProps({ currentShow, currentEpisode }) {
  return { currentShow, currentEpisode };
}

export default connect(mapStateToProps, {
  getSerie: getSerie,
  selectEpisode: selectEpisode
})(PlayerView);
