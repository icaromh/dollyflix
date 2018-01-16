import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { itemsFetchData } from '../actions/shows'
import { selectShow } from '../actions/show'

import ShowItem from '../components/ShowItem'

class FavoriteList extends Component {
  componentDidMount() {
    // if (!this.props.items.length) { this.props.fetchData() }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  render() {
    if (!this.props.items.length) {
      return false
    }

    return (
      <div>
        <h3 className="title">Séries Favoritas</h3>
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
  }
}

FavoriteList.propTypes = {
  items: PropTypes.array, // .isRequired,
  selectShow: PropTypes.func.isRequired,
}

FavoriteList.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  items: state.favoriteItems,
})

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  selectShow: show => dispatch(selectShow(show)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)
