import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowItem from '../../components/ShowItem'

class FavoriteList extends Component {
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
  items: PropTypes.array,
  selectShow: PropTypes.func.isRequired,
}

FavoriteList.defaultProps = {
  items: [],
}

export default FavoriteList
