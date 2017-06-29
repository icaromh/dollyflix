import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaItem from '../components/mediaItem';

class MediaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: false,
    }
  }

  setLink(link){
    this.setState({ link })
  }

  renderSeasons(episodes){
    const seasons = {};

    episodes.map((ep) => {
      if(!seasons[ep.season]){
        seasons[ep.season] = [];
      }
      seasons[ep.season].push(ep);
    });

    return Object.keys(seasons).map(season => {
      const eps = seasons[season].map((e) => {
        return (
          <div key={e.tvdb_id} style={{color: '#fff'}}>
            <span>{e.episode}. {e.title + ': '}</span>
            {Object.keys(e.providers).map((p) => {
              return (
                <span key={e.providers[p].key}>
                  <span
                    className="btn btn-link"
                    onClick={() => this.setLink(e.providers[p].link)}
                    >{e.providers[p].name}</span>
                  {' / '}
                </span>
              )
            })}
          </div>
        )
      });

      return (
        <div key={season}>
          <h2 className="page-title">{season} season</h2>
          {eps}
        </div>
      )
    })
  }

  render() {
    console.log(this.props.currentMedia);
    if (!this.props.currentMedia) {
      return false;
    }

    return (
      <div>
        <MediaItem link={this.state.link} />
        <div className="container">
          <h1 className="page-title">{this.props.currentMedia.title}</h1>
          {this.renderSeasons(this.props.currentMedia.episodes)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentMedia }) {
  return { currentMedia };
}

export default connect(mapStateToProps)(MediaContainer);
