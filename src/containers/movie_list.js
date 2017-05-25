import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

class MovieList extends Component{
  constructor(props){
    super(props);
  }

  renderMovie(movie){
    const itemStyle = {
      backgroundImage: `url(${movie.poster_med})`,
    };

    return (
      <div
        key={movie.id}
        className="thumbnail movielist__item"
        style={itemStyle}>

        <span className="movielist__item__meta">
          {movie.title}
        </span>
      </div>
    );
  }

  render(){
    return (
      <div>
        {this.props.movies.map(this.renderMovie)}
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MovieList);
