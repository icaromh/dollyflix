import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMedia } from '../actions/index';
import Spinner from '../components/spinner';
import SerieItem from '../components/serieItem';

class SerieList extends Component{
  constructor(props){
    super(props);

    this.renderSerie = this.renderSerie.bind(this);
  }

  selectMedia(media){
    this.props.selectMedia(media);
  }

  renderSerie(serie){

    return (
      <SerieItem
        serie={serie}
        onClick={() => this.selectMedia(serie)}
        />
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

    return (
      <div>
        <h1 className="page-title">Latest Series</h1>
      </div>
    )
  }

  renderList(){
    return (
      <div className="medialist">
        {this.props.series.map(this.renderSerie)}
      </div>
    )
  }

  render(){
    console.log(this.props.series);
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
