import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSerie, selectEpisode } from '../actions';
import MediaItem from '../components/mediaItem';
import SerieHeader from '../components/serieHeader';

class SerieView extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentMedia: this.props.currentMedia || false
    }

    this.selectEpisode = this.selectEpisode.bind(this);
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

  selectEpisode(ep){
    console.log(ep);
    this.setState({epSelected: ep})
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
        <div key={season}>
          <h1 className="page-title">Season {season}</h1>
          <div className="episodes-list" key={season}>
            {this.renderEpisodes(season)}
          </div>
        </div>
      )
    })
  }

  renderEpisodes(season){

    return this.state.currentMedia.episodes.map((ep, i) => {
      const itemStyle = {
        backgroundImage: `url(${(ep.images && ep.images.medium) || this.state.currentMedia.images.poster})`,
      };

      if(ep.season === season){
        return (
          <div
            className='episode'
            onClick={() => this.selectEpisode(ep)}
            key={i}
          >
            <div className="episode__bg" style={itemStyle}>
              <div className="episode__number">
                {ep.episode}
              </div>
            </div>
            <div className="episode__meta">
              {ep.title}
            </div>
          </div>
        );
      }
    });
  }

  renderMedia(ep){
    return (
      <div>
        <select onChange={(ev) => this.setState({link: ev.target.value})} className="select-provider">
          {ep.providers.map((p) => {
            return (<option value={p.link}>{p.name}</option>)
          })}
        </select>
        <MediaItem link={this.state.link || ep.providers[0].link} />
      </div>
    )
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
        {this.state.epSelected ?
          this.renderMedia(this.state.epSelected)
          : <SerieHeader serie={serie} />
        }

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
  getSerie: getSerie,
  selectEpisode: selectEpisode
})(SerieView);
