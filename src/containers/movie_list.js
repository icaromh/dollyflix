import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMedia } from '../actions/index';
import Spinner from '../components/spinner';

class MovieList extends Component{
  constructor(props){
    super(props);

    this.renderMovie = this.renderMovie.bind(this);
  }

  selectMedia(media){
    this.props.selectMedia(media);
  }

  renderMovie(movie){
    const itemStyle = {
      backgroundImage: `url(${movie.poster_med})`,
    };

    return (
      <div
        key={movie.id}
        className="thumbnail movielist__item"
        onClick={() => this.selectMedia(movie)}
        style={itemStyle}>

        <span className="movielist__item__meta">
          <a
            target="_blank"
            href={`http://www.imdb.com/title/${movie.imdb}/`}>
            {movie.title}
          </a>
        </span>
      </div>
    );
  }

  renderLoader(){
    if(this.props.search.term !== null){
      return (
        <div>
          <h1>Searching for "{this.props.search.term}"</h1>
          <Spinner />
        </div>
      )
    }

    return false;

  }

  renderList(){
    if(this.props.search.term !== null){
      return (
        <div>
          <h1>Results for "{this.props.search.term}"</h1>
          {this.props.movies.map(this.renderMovie)}
        </div>
      )
    }

    return false;
  }

  render(){
    return (
      <div className="container">
        {this.props.search.loading
          ? this.renderLoader()
          : this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ movies, search }) {
  return { movies, search };
}

export default connect(mapStateToProps, {
  selectMedia: selectMedia
})(MovieList);
