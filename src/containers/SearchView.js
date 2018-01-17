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

  renderContent = () => (
    <div className="container">
      <Helmet title={`Dollyflix - Results for ${this.props.term}`} />

      <h1 className="page-title">
        Results for &quot;{this.props.term}&quot;
        {/* <a tabIndex={0} role="link" className="clearSearch" onClick={this.handleClearSearch}>(clear search)</a> */}
      </h1>

      <div className="showlist">
        {this.props.shows.map(show => (
          <ShowItem
            show={show}
            onClick={this.handleSelectShow}
            key={show.slug}
          />
        ))}
      </div>
    </div>
  )

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
