import React, { Component } from 'react';
import SearchIcon from './SearchIcon'

class SearchForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      term: '',
    };
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const term = this.state.term.trim();
    this.props.onSubmit(term)
  }


  onInputChange = (ev) => {
    const term = ev.target.value;
    this.setState({ term: term });
  }

  render() {
    return (
      <form onSubmit={(ev) => this.handleFormSubmit(ev)} className="searchbox__form is-fluid">
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
    );
  }

}

export default SearchForm
