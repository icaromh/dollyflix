import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { itemsFetchData } from '../actions/shows'
import { selectShow } from '../actions/show'

import ShowItem from '../components/ShowItem'
import Loader from '../components/Loader'
import FavoriteList from './FavoriteList'

class ShowList extends Component {

  componentDidMount() {
    if (!this.props.items.length) { this.props.fetchData() }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  renderContent = () => (
    <div className="container">
      <Helmet title={'Dollyflix'} />

      <FavoriteList />

      <h3 className="title">Séries</h3>

      <div className="showlist">
        {this.props.items.map(show => (
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

ShowList.propTypes = {
  items: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  selectShow: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  selectShow: show => dispatch(selectShow(show)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
