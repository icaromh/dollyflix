import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchSeries, searchTerm } from '../actions/index';
import SearchForm from '../components/Search';

class SearchBar extends Component{

  handleFormSubmit = (term) => {
    this.props.searchTerm(term);
    this.props.fetchSeries(term);
  }

  render(){
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar__box">
          <SearchForm onSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, {
  fetchSeries: fetchSeries,
  searchTerm: searchTerm,
})(SearchBar);
