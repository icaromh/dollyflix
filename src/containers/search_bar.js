import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie, searchTerm } from '../actions/index';
import SearchIcon from '../components/SearchIcon';

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
    const term = this.state.term.trim();
    this.props.searchTerm(term);
    this.props.fetchMovie(term);
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
            placeholder="Título do filme"
          />
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchMovie();
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
  fetchMovie: fetchMovie,
  searchTerm: searchTerm,
})(SearchBar);
