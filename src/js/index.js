import '../scss/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';

const store = createStore(
	combineReducers({
		reducers,
		routing: routerReducer
	}),
	JSON.parse(window.__PRELOADED_STATE__) // calculated server side (see server.js)
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
})