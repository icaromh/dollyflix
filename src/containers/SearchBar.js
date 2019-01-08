import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { searchShowFetchData } from '../actions/search'

import SearchForm from '../components/Search'

class SearchBar extends Component {
  changePath = (term) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation())
    location.pathname = `/search${term}`
    browserHistory.push(location)
  }

  handleFormSubmit = (term) => {
    this.changePath(term)
    this.props.search(term)
  }

  render() {
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar__box">
          <SearchForm onSubmit={this.handleFormSubmit} />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  search: term => dispatch(searchShowFetchData(term)),
})

export default connect(null, mapDispatchToProps)(SearchBar)
