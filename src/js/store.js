/* eslint-disable no-underscore-dangle */

import {
  compose,
  createStore as reduxCreateStore,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';

const isClient = typeof window !== 'undefined';

const preloadedState = isClient
  ? JSON.parse(window.__PRELOADED_STATE__) // calculated server side (see server/index.js)
  : {};

const composeEnhancers = isClient
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

let store; /* eslint-disable-line import/no-mutable-exports */

export const createStore = history => {
  if (!store) {
    store = reduxCreateStore(
      connectRouter(history)(reducers), // new root reducer with router state
      preloadedState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );
  }

  return store;
};

export default store;
