import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#dollyflix'));
