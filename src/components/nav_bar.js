import React from 'react';
import SearchBar from '../containers/search_bar';

export default function(){
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#/">PirateFlix</a>
        </div>

        <SearchBar />

      </div>
    </nav>
  )
}
