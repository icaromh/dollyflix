import React from 'react'
import PropTypes from 'prop-types'

import NavBar from './NavBar'

const App = props => (
  <div>
    <NavBar location={props.location.pathname} />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default App
