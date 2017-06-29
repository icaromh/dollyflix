import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexView from './components/indexView';
import IndexView2 from './components/indexView2';
import SearchView from './components/searchView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="search?q=:term" component={SearchView} /> */}
    <Route path="bonito" component={IndexView2} /> */}
  </Route>
);
