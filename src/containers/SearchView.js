import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { searchShowFetchData } from '../actions/search'
import { selectShow } from '../actions/show'

import ShowItem from '../components/ShowItem'
import Loader from '../components/Loader'

class SearchView extends Component {
  componentDidMount() {
    if (!this.props.term) {
      this.props.search(this.props.params.slug)
    }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  renderContent = () => {
    const { shows, term } = this.props
    const hasResults = this.props.shows.length > 0
    const resultMessage = (size, searchTerm) => {
      if (size === 0) return `No results for "${searchTerm}"`
      return `${size} results for "${searchTerm}"`
    }

    return (
      <div className="container">
        <Helmet title={`Dollyflix - Results for ${term}`} />

        <h1 className="page-title">
          {resultMessage(shows.length, term)}
        </h1>

        <div className="showlist">
          {hasResults && this.props.shows.map(show => (
            <ShowItem
              show={show}
              onClick={this.handleSelectShow}
              key={show.slug}
            />
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <Loader
        for={!this.props.isLoading}
        render={this.renderContent}
      />
    )
  }
}

SearchView.propTypes = {
  term: PropTypes.string.isRequired,
  shows: PropTypes.array.isRequired,
  selectShow: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  params: PropTypes.object.isRequired,
}

SearchView.defaultProps = {
  isLoading: false,
}

const mapStateToProps = state => ({
  shows: state.search.results,
  term: state.search.term,
  isLoading: state.search.isLoading,
})

const mapDispatchToProps = dispatch => ({
  selectShow: show => dispatch(selectShow(show)),
  search: term => dispatch(searchShowFetchData(term)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
