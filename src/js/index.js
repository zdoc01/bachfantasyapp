import '../scss/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import routes from './routes';

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
