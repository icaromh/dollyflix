import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchShows, searchTerm } from '../actions/index';
import SearchForm from '../components/Search';

class SearchBar extends Component{

  changePath = (term) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    location.pathname = `/search/${term}`;
    browserHistory.push(location);
  }

  handleFormSubmit = (term) => {
    this.changePath(term)
    this.props.searchTerm(term);
    this.props.fetchShows(term);
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
  fetchShows: fetchShows,
  searchTerm: searchTerm,
})(SearchBar);
