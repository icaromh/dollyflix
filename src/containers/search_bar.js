import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchSeries, searchTerm } from '../actions/index';
import SearchIcon from '../components/SearchIcon';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changePath = this.changePath.bind(this);
    this.search = this.search.bind(this);
  }

  changePath(term){
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    location.pathname = `/search/${term}`;
    browserHistory.push(location);
  }

  onInputChange(ev){
    const term = ev.target.value;
    this.setState({ term: term });
  }

  search(term){
    this.changePath(term);
    this.props.searchTerm(term);
    this.props.fetchSeries(term);
  }

  onFormSubmit(ev){
    ev.preventDefault();
    const term = this.state.term.trim();
    this.search(term);
    this.inputSearch.blur();
  }

  renderForm(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="searchbox__form is-fluid">
          <SearchIcon className="searchbox__icon__form" />
          <input
            ref={(el) => { this.inputSearch = el; }}
            className="searchbar__input"
            value={this.state.term}
            onChange={this.onInputChange}
            type="text"
            placeholder="Título da série"
          />
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchSeries();
  }

  render(){
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar__box">
          { this.renderForm() }
        </div>
      </div>
    );
  }
}

export default connect(null, {
  fetchSeries: fetchSeries,
  searchTerm: searchTerm,
})(SearchBar);
