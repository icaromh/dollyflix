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
        {this.props.children}
      </div>
    )
  }
}

Loader.propTypes = {
  for: PropTypes.any.isRequired,
  render: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
}

Loader.defaultProps = {
  title: '',
  children: <Spinner />,
}

export default Loader
