import React from 'react'
import PropTypes from 'prop-types'

const Spinner = props => (
  <img
    alt="Loading"
    className="spinner spinner-animated"
    src="/images/dollyflix.png"
    height={props.height}
  />
)

Spinner.propTypes = {
  height: PropTypes.string,
}

Spinner.defaultProps = {
  height: '120px',
}

export default Spinner
