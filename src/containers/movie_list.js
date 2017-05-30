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
      backgroundImage: `url(${movie.images.banner})`,
    };

    return (
      <div
        key={movie.imdb_id}
        className="thumbnail movielist__item"
        onClick={() => this.selectMedia(movie)}
        style={itemStyle}>

        <span className="movielist__item__meta">
          <a
            target="_blank"
            href={`http://www.imdb.com/title/${movie.imdb_id}/`}>
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
          <h1 className="page-title">
            Searching for "{this.props.search.term}"
          </h1>
          <Spinner />
        </div>
      )
    }

    return false;

  }

  renderTitle() {
    if (this.props.search.loading) {
      return this.renderLoader();
    }

    if (this.props.search.term !== null) {
      return (
        <div>
          <h1 className="page-title">
            Results for "{this.props.search.term}"
          </h1>
        </div>
      )
    }

    return (
      <div>
        <h1 className="page-title">Latest movies</h1>
      </div>
    )
  }

  renderList(){
    return (
      <div className="medialist">
        {this.props.movies.map(this.renderMovie)}
      </div>
    )
  }

  render(){
    console.log(this.props.movies);
    return (
      <div className="container">
        {this.renderTitle()}
        {this.renderList()}
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
