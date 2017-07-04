import React from 'react';
import { Link } from 'react-router';

import SearchBar from '../containers/search_bar';

export default function(){
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-5">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                <img alt="Brand" className="navbar-brand-image" src="/images/dollyflix.png" height="40px" />
                <span className="hidden-xs">DollyFlix</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xs-7">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
}
