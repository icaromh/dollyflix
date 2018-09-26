import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowItem from '../../components/ShowItem'


class NetworksList extends Component {
  componentDidMount() {
    if (!this.props.items.length) { this.props.fetchData() }
  }

  handleSelectShow = (show) => {
    this.props.selectShow(show)
  }

  render() {
    if (!this.props.items.length) {
      return false
    }

    const renderNetworkList = network => (
      <div className="container">
        <h3 className="title">{network.name}</h3>
        <div className="showlist" key={network.name}>
          {network.shows.map(show => (
            <ShowItem
              show={show}
              onClick={this.handleSelectShow}
              key={show.slug}
            />
          ))}
        </div>
      </div>
    )

    console.log(this.props.items)
    return (
      <div>
        {this.props.items.map(item => renderNetworkList(item))}
      </div>
    )
  }
}

NetworksList.propTypes = {
  items: PropTypes.array,
  selectShow: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
}

NetworksList.defaultProps = {
  items: [],
}

export default NetworksList
