import React from 'react';
import SearchBar from '../containers/search_bar';

export default function(){
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="col-md-6">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">
              <img alt="Brand" className="navbar-brand-image" src="./images/dollyflix.png" height="40px" />
              DollyFlix
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}
