import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSerie, selectEpisode } from '../actions';
import VideoPlayer from '../components/VideoPlayer';


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
    const show = this.state.currentEpisode;

    if(!show) {
      return (
        <div className="container">
          <h1>Loading</h1>
        </div>
      );
    }

    const videoJsOptions = {
      autoplay: false,
      controls: true,
      poster: this.state.currentEpisode.image,
      sources: [{
        src: `http://www.blogger.com/video-play.mp4?contentId=${this.state.currentEpisode.id}`,
        type: 'video/mp4'
      }]
    }

    return (
      <div className="player-area">
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
