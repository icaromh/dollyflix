import React, { Component } from 'react';

import SerieList from '../containers/serieList';
// import MediaContainer from '../containers/media_container';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* </MediaContainer /> */}
        <SerieList />
      </div>
    );
  }
}
