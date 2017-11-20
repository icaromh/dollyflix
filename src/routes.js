import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexView from './components/indexView';
import SerieView from './containers/serieView';
import SearchView from './components/searchView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="serie/:slug" component={SerieView} />
    <Route path="player/:slug/:season/:episode" component={SerieView} />
    <Route path="search/:term" component={SearchView} />

  </Route>
);
