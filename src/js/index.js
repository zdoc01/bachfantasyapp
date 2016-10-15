import '../scss/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { match, Router, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';

import reducers from './reducers';
import routes from './routes';

const routingMiddleware = routerMiddleware(browserHistory);
const loggingMiddleware = (window.location.hostname === 'localhost') ? createLogger() : () => {};

const preloadedState = JSON.parse(window.__PRELOADED_STATE__); // calculated server side (see server/index.js)

const middleware = applyMiddleware(
  loggingMiddleware,
  routingMiddleware,
  thunk // async action creators
);

const store = createStore(
  reducers,
  preloadedState,
  middleware
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
  	<Provider store={store}>
  		<Router {...renderProps} />
  	</Provider>,
  	document.getElementById('main')
  );
});