import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import { searchTerm } from '../actions/index'
import { itemsFetchData } from '../actions/shows'
import { selectShow } from '../actions/show'

import ShowItem from '../components/ShowItem'
import Loader from '../components/Loader'

class SearchView extends Component {

  componentDidMount() {
    // if (!this.props.search.term) { this.props.itemsFetchData() }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  changePath = () => {
    const location = Object.assign({}, browserHistory.getCurrentLocation())
    location.pathname = '/'
    browserHistory.push(location)
  }

  renderContent = () => (
    <div className="container">
      <Helmet title={`Dollyflix - Results for ${this.props.search.term}`} />

      <h1 className="page-title">
        Results for &quot; {this.props.search.term} &quot;
        <a tabIndex={0} role="link" className="clearSearch" onClick={this.handleClearSearch}>(clear search)</a>
      </h1>

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

  render() {
    return (
      <Loader
        for={!this.props.search.loading && this.props.series.length}
        render={this.renderContent}
      />
    )
  }
}

SearchView.propTypes = {
  search: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  selectShow: PropTypes.func.isRequired,
}

const mapStateToProps = ({ series, search }) => ({ series, search })

export default connect(mapStateToProps, {
  selectShow,
  itemsFetchData,
  searchTerm,
})(SearchView)
