import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

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
    this.setState({
      term: ev.target.value
    })
  }

  onFormSubmit(ev){
    ev.preventDefault();

    this.props.fetchMovie(this.state.term);
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="navbar-form navbar-left">
        <div className="input-group">
          <input
            className="search_bar form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            type="text"
            placeholder="Pesquise pelo nome"
          />

          <span className="input-group-btn">
            <button className="btn btn-default">Buscar</button>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
