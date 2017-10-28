import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSerie, selectEpisode } from '../actions';
import MediaItem from '../components/mediaItem';
import SerieHeader from '../components/serieHeader';
import EpisodesList from '../components/EpisodesList';
import SeasonSelector from '../components/SeasonSelector';

class SerieView extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentMedia: this.props.currentMedia || {},
      seasons: [],
      seasonSelected: 1,
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

  handleChangeSeason = (ev) => {
    this.setState({
      seasonSelected: parseInt(ev.target.value, 10)
    })
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
    const serie = this.state.currentMedia;
    const episodes = serie.episodes && serie.episodes.filter(ep => ep.season === this.state.seasonSelected)

    if(!serie) {
      return (
        <div className="container">
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div>
        {this.state.epSelected ?
          this.renderMedia(this.state.epSelected)
          : <SerieHeader serie={serie} />
        }

        <div className="container container--padding">
          <SeasonSelector
            seasons={this.props.seasons}
            onChange={this.handleChangeSeason}
          />

          <EpisodesList
            season={this.state.seasonSelected}
            episodes={episodes}
            onSelectEpisode={(el) => console.log(el)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentMedia, seasons }) {
  return { currentMedia, seasons };
}

export default connect(mapStateToProps, {
  getSerie: getSerie,
  selectEpisode: selectEpisode
})(SerieView);
