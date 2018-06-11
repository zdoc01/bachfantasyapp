import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import reducers from '../src/js/reducers';
import App from '../src/js/app';

/**
 * Creates a string representation of the app based
 * on the requested route. If preloadedState is provided,
 * we'll bootstrap the redux store accordingly and use
 * it in our initial render.
 *
 * @param req             Express request reference
 * @param res             Express response reference
 * @param preloadedState  App state to bootstrap the redux store
 */
export default (req, res, preloadedState = {}) => {
  /* eslint-disable-next-line no-console */
  console.log('handling [ %s ]', req.url);

  const store = createStore(reducers, preloadedState);
  const reduxState = JSON.stringify(store.getState());

  // can be used to provide additional context, such
  // as response status codes, etc. based on the route
  // that gets rendered.
  // See https://reacttraining.com/react-router/web/example/static-router
  // See https://reacttraining.com/react-router/web/guides/server-rendering/adding-app-specific-context-information
  const context = {};

  /* eslint-disable */
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  /* eslint-enable */

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(302, context.url);
  } else {
    res.render('index', { html, reduxState });
  }
};
