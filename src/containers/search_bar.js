import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie, searchTerm } from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(ev){
    this.setState({ term: ev.target.value });
  }

  onFormSubmit(ev){
    ev.preventDefault();
    this.props.searchTerm(this.state.term);
    this.props.fetchMovie(this.state.term);
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="navbar-form is-fluid search-bar">
          <input
            className="search-input form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            type="text"
            placeholder="Pesquise pelo nome"
          />
      </form>
    );
  }
}

export default connect(null, {
  fetchMovie: fetchMovie,
  searchTerm: searchTerm,
})(SearchBar);
