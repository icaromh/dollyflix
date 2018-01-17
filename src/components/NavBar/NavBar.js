import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import SearchBar from '../../containers/SearchBar'
import {
  EVENT_CATEGORY_NAVIGATION,
  NAVIGATION_FAVORITE_CLICK,
  NAVIGATION_HOME_CLICK,
} from '../../constants'

const NavBar = ({ location }) => {
  const handleOnClickNav = (action) => {
    ReactGA.event({
      category: EVENT_CATEGORY_NAVIGATION,
      action,
    })
  }

  const isActive = path => (location === path ? 'active' : false)

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-5">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand" onClick={() => handleOnClickNav(NAVIGATION_HOME_CLICK)}>
                <img alt="Brand" className="navbar-brand-image" src="/images/dollyflix.png" height="40px" />
                <span className="hidden-xs">DollyFlix</span>
              </Link>
            </div>

            <ul className="nav navbar-nav">
              <li className={isActive('/favorites')}>
                <Link to="/favorites" onClick={() => handleOnClickNav(NAVIGATION_FAVORITE_CLICK)}>
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xs-7">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  location: PropTypes.string.isRequired,
}

export default NavBar
