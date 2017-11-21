import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { selectShow, fetchShows } from '../actions/index';

import ShowItem from '../components/ShowItem'
import Loader from '../components/Loader'


class ShowList extends Component {

  componentDidMount(){
    this.props.fetchShows()
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show);
  }

  renderContent = () => {

    const title = this.props.search.term && (
      <h1 className="page-title">
        Results for "{this.props.search.term}"
      </h1>
    )

    return (
      <div className="container">
        <Helmet title={`Dollyflix`} />

        {title}

        <div className="showlist">
          {this.props.series.map(show => (
            <ShowItem
              show={show}
              onClick={this.handleSelectShow}
              key={show.slug} />
          ))}
        </div>
      </div>
    );
  }

  render(){
    return (
      <Loader for={!this.props.search.loading && this.props.series.length}
        render={this.renderContent} />
    )
  }
}

function mapStateToProps({ series, search }) {
  return { series, search };
}

export default connect(mapStateToProps, {
  selectShow,
  fetchShows
})(ShowList);
