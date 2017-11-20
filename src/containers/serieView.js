import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSerie, selectEpisode } from '../actions';
import SerieHeader from '../components/serieHeader';
import EpisodesList from '../components/EpisodesList';
import SeasonSelector from '../components/SeasonSelector';

class SerieView extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentShow: this.props.currentShow || {},
      seasons: [],
      seasonSelected: 1,
    }

    this.handleOnClickEpisode = this.handleOnClickEpisode.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentShow){
      this.setState({ currentShow: nextProps.currentShow });
    }
  }

  componentWillMount(){
    if(!this.props.currentShow){
      this.props.getSerie(this.props.params.slug)
    }
  }

  handleOnClickEpisode(episode){
    this.props.selectEpisode(episode)
  }

  handleChangeSeason = (ev) => {
    this.setState({
      seasonSelected: parseInt(ev.target.value, 10)
    })
  }

  render() {
    const show = this.state.currentShow;
    const episodes = show.episodes && show.episodes.filter(ep => parseInt(ep.season, 10) === this.state.seasonSelected)

    if(!show) {
      return (
        <div className="container">
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div>
        <SerieHeader serie={show} />

        <div className="container container--padding">
          <SeasonSelector
            seasons={this.props.seasons}
            onChange={this.handleChangeSeason}
          />

          <EpisodesList
            show={show}
            season={this.state.seasonSelected}
            episodes={episodes}
            onClick={this.handleOnClickEpisode}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentShow, seasons }) {
  return { currentShow, seasons };
}

export default connect(mapStateToProps, {
  getSerie: getSerie,
  selectEpisode: selectEpisode
})(SerieView);
