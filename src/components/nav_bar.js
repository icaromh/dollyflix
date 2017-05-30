import React from 'react';
import SearchBar from '../containers/search_bar';

export default function(){
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-5">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img alt="Brand" className="navbar-brand-image" src="/assets/images/dollyflix.png" height="40px" />
                <span className="hidden-xs">DollyFlix</span>
              </a>
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
