import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

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

  changePath = () => {
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
        Results for &quot; {this.props.search.term} &quot;
        <a tabIndex={0} role="link" className="clearSearch" onClick={this.handleClearSearch}>(clear search)</a>
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

ShowList.propTypes = {
  search: PropTypes.object,
  series: PropTypes.series,
  selectShow: PropTypes.func.isRequired,
  fetchShows: PropTypes.func.isRequired,
  searchTerm: PropTypes.func.isRequired,
}

ShowList.defaultProps = {
  series: [],
  search: { term: false },
}

const mapStateToProps = ({ series, search }) => ({ series, search })

const mapDispathToProps = () => ({
  selectShow,
  fetchShows,
  searchTerm,
})

export default connect(mapStateToProps, mapDispathToProps)(ShowList)
