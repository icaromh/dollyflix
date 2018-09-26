import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'

import ShowView from './containers/ShowView'
import ShowList from './containers/ShowList'
import SearchView from './containers/SearchView'
import PlayerView from './containers/PlayerView'
import FavoriteView from './components/FavoriteView'
import NetworksView from './components/NetworksView'

export default (
  <Route path="/" component={App} onChange={() => window.scrollTo(0, 0)}>
    <IndexRoute component={ShowList} />
    <Route path="favorites" component={FavoriteView} />
    <Route path="networks" component={NetworksView} />
    <Route path="show/:slug" component={ShowView} />
    <Route path="show/:slug/:season" component={ShowView} />
    <Route path="show/:slug/:season/:episode" component={PlayerView} />
    <Route path="search/:slug" component={SearchView} />
  </Route>
)
