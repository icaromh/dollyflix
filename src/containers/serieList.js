import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { selectMedia } from '../actions/index';
import Spinner from '../components/spinner';
import SerieItem from '../components/serieItem'

class SerieList extends Component{
  constructor(props){
    super(props);

    this.renderSerie = this.renderSerie.bind(this);
    this.selectMedia = this.selectMedia.bind(this);
  }

  selectMedia(media){
    this.props.selectMedia(media);
  }

  renderSerie(serie){
    return (
      <Link
        key={serie.slug}
        onClick={() => this.selectMedia(serie)}
        to={`/serie/${serie.slug}`}
        className='showlist__link'
      >
        <SerieItem serie={serie} />
      </Link>
    );
  }

  renderLoader(){
    if(this.props.search.term !== null){
      return (
        <div>
          <h1 className="page-title">
            Searching for "{this.props.search.term}"
          </h1>
          <Spinner />
        </div>
      )
    }

    return false;

  }

  renderTitle() {
    if (this.props.search.loading) {
      return this.renderLoader();
    }

    if (this.props.search.term !== null) {
      return (
        <div>
          <h1 className="page-title">
            Results for "{this.props.search.term}"
          </h1>
        </div>
      )
    }

    return false
  }

  renderList(){
    return (
      <div className="showlist">
        {this.props.series.map(this.renderSerie)}
      </div>
    )
  }

  render(){
    return (
      <div className="container">
        {this.renderTitle()}
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ series, search }) {
  return { series, search };
}

export default connect(mapStateToProps, {
  selectMedia: selectMedia
})(SerieList);
