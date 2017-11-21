import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
// import logger from 'redux-logger'

import './style.css'

import registerServiceWorker from './registerServiceWorker';


import reducers from './reducers';
import routes from './routes';



const createStoreWithMiddleware = applyMiddleware(
  // logger,
  ReduxPromise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#dollyflix'));


registerServiceWorker();

function loadLinks(){
  if (Array.prototype.forEach)
    Array.prototype.forEach.call(document.querySelectorAll('link[media="none"]'), function(link) {
    link.setAttribute('media', 'all')
  })
}
