import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'
// import logger from 'redux-logger'

import './style.css'
import registerServiceWorker from './registerServiceWorker'

import { GOOGLE_ANALYTICS_KEY } from './constants'
import reducers from './reducers'
import routes from './routes'


ReactGA.initialize(GOOGLE_ANALYTICS_KEY, {
  debug: false,
})

browserHistory.listen(location => ReactGA.pageview(location.pathname + location.search))

const createStoreWithMiddleware = applyMiddleware(
  // logger,
  ReduxPromise,
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#dollyflix'))


function loadLinks() {
  if (Array.prototype.forEach) {
    Array.prototype.forEach.call(document.querySelectorAll('link[media="none"]'), (link) => {
      link.setAttribute('media', 'all')
    })
  }
}

registerServiceWorker()
loadLinks()
