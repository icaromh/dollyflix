import React from 'react';
import { Link } from 'react-router';
import ReactGA from 'react-ga';

import SearchBar from '../../containers/SearchBar';
import {
  EVENT_CATEGORY_NAVIGATION,
  NAVIGATION_HOME_CLICK
} from '../../constants'

const NavBar = () => {

  const handleOnClickNav = () => {
    ReactGA.event({
      category: EVENT_CATEGORY_NAVIGATION,
      action: NAVIGATION_HOME_CLICK
    })
  }

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-5">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand" onClick={() => handleOnClickNav()}>
                <img alt="Brand" className="navbar-brand-image" src="/images/dollyflix.png" height="40px" />
                <span className="hidden-xs">DollyFlix</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xs-7">
            <SearchBar />
          </div>
        </div>
        <div className="col-md-6 col-xs-7">
          <SearchBar />
        </div>
      </div>
    </div>
  </nav>
  )

export default NavBar
