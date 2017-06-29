import React, { Component } from 'react';

import SerieList from '../containers/serieList';

import NavBar from './nav_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SerieList />
      </div>
    );
  }
}
