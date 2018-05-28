import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const isClient = (typeof window !== 'undefined');

const preloadedState = (
  isClient
    ? JSON.parse(window.__PRELOADED_STATE__) // calculated server side (see server/index.js)
    : {}
);

const composeEnhancers = (
  isClient
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
    : compose
);

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(browserHistory),
      thunk
    )
  )
);

export default store;
