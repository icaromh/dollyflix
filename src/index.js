import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import { GOOGLE_ANALYTICS_KEY } from './constants'

import './style.css'
import registerServiceWorker from './registerServiceWorker'

import routes from './routes'
import configureStore from './store/configureStore'
import { loadState, saveState } from './store'

const initialState = loadState()
const store = configureStore(initialState)

store.subscribe(() => {
  saveState(store.getState())
})

ReactGA.initialize(GOOGLE_ANALYTICS_KEY, {
  debug: false,
})

browserHistory.listen(location => ReactGA.pageview(location.pathname + location.search))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#dollyflix'),
)


function loadLinks() {
  if (Array.prototype.forEach) {
    Array.prototype.forEach.call(document.querySelectorAll('link[media="none"]'), (link) => {
      link.setAttribute('media', 'all')
    })
  }
}

registerServiceWorker()
loadLinks()
