import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import '../scss/index.scss';

import { createStore } from './store';
import App from './app';

const history = createBrowserHistory();
const store = createStore(history);

// `hydrate` will hook into the data-react-id attributes
// from the server-rendered HTML. This will connect our
// newly-started React instance to the virtual DOM used
// on the server.
hydrate(
  <Provider store={store}>
    {/* ConnectedRouter syncs navigation events with the store */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
);
