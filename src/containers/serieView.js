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
    return (
      <div>
        <div className="container">
          {this.state.currentMedia ?
            <h1 className="page-title">{ this.state.currentMedia.title }</h1>
            : <h1 className="page-title">Loading</h1>}

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
