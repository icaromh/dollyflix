import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSerie } from '../actions'

class SerieView extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentMedia: this.props.currentMedia || false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentMedia){
      this.setState({ currentMedia: nextProps.currentMedia });
    }
  }

  componentWillMount(){
    if(!this.props.currentMedia){
      this.props.getSerie(this.props.params.slug)
    }
  }

  renderSeason(){
    const seasons = this.state.currentMedia.episodes.map(ep => ep.season)
      .reduce((acc, el) => {
        return acc.indexOf(el) === -1
        ? acc.concat(el)
        : acc;
      }, []);

    return seasons.sort().map(season => {
      return (
        <div>
          <h1 className="page-title">Season {season}</h1>
          <div className="medialist" key={season}>
            {this.renderEpisodes(season)}
          </div>
        </div>

      )
    })
  }

  renderEpisodes(season){

    return this.state.currentMedia.episodes.map((ep) => {
      const itemStyle = {
        backgroundImage: `url(${(ep.images && ep.images.medium) || this.state.currentMedia.images.poster})`,
      };

      if(ep.season === season){
        console.log(ep)
        return (
          <div
            key={ep.imdb_id}
            className="thumbnail serielist__item serielist__item--episode"
            style={itemStyle}
          >
            <span className="serielist__item__meta">
              {`${ep.episode}. ${ep.title}`}
            </span>
          </div>
        );
      }
      return;
    })
  }

  render() {
    if(!this.state.currentMedia) {
      return (
        <div className="container">
          <h1>Loading</h1>
        </div>
      );
    }

    const serie = this.state.currentMedia;

    return (
      <div>
        <div className="serie-featured-wrapper">
          <div className="serie-data">
            <h1 className="serie-title">{serie.title}</h1>
            <div className="serie-metadata">
              <span className="serie-metadata-item">{serie.year}</span>
              <span className="serie-metadata-item">{serie.network}</span>
              <span className="serie-metadata-item">{serie.num_seasons} Seasons</span>
            </div>
            <div className="serie-synopsis">
              <p>{serie.synopsis}</p>
            </div>
          </div>
          <div className="serie-featured-player">
            <div className="serie-featured-bg" style={{backgroundImage: `url(${serie.images.fanart})`}}></div>
            <div className="serie-featured-player-icon"></div>
          </div>
        </div>

        <div className="container">
          {this.state.currentMedia && this.renderSeason()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentMedia }) {
  return { currentMedia };
}

export default connect(mapStateToProps, {
  getSerie: getSerie
})(SerieView);
