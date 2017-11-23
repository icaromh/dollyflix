import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Spinner from './Spinner'

class Loader extends Component {
  render() {
    if (this.props.for) return this.props.render()

    const title = this.props.title && (<h1 className="loader__title">{this.props.title}</h1>)

    return (
      <div className="loader">
        {title}
        <Spinner />
      </div>
    )
  }
}

Loader.propTypes = {
  for: PropTypes.boolean.isRequired,
  render: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Loader.defaultProps = {
  title: false,
}

export default Loader
