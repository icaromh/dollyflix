import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { browserHistory } from 'react-router'

import { selectShow, fetchShows, searchTerm } from '../actions/index'

import ShowItem from '../components/ShowItem'
import Loader from '../components/Loader'


class ShowList extends Component {

  componentDidMount() {
    if (!this.props.search.term) { this.props.fetchShows() }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  changePath = (term) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation())
    location.pathname = '/'
    browserHistory.push(location)
  }

  handleClearSearch = (ev) => {
    ev.preventDefault()
    this.props.searchTerm('')
    this.changePath('')
    this.props.fetchShows()
  }

  renderContent = () => {
    const title = this.props.search.term && (
      <h1 className="page-title">
        Results for "{this.props.search.term}"

        <a className="clearSearch" onClick={this.handleClearSearch}>(clear search)</a>
      </h1>
    )

    return (
      <div className="container">
        <Helmet title={'Dollyflix'} />

        {title}

        <div className="showlist">
          {this.props.series.map(show => (
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
        for={!this.props.search.loading && this.props.series.length}
        render={this.renderContent}
      />
    )
  }
}

function mapStateToProps({ series, search }) {
  return { series, search }
}

export default connect(mapStateToProps, {
  selectShow,
  fetchShows,
  searchTerm,
})(ShowList)
