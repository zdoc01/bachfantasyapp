import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import reducers from '../src/js/reducers';
import routes from '../src/js/routes';

const matchRoute = (req, res, preloadedState) => {
  const store = createStore(reducers, preloadedState);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    console.log('handling [ %s ]', req.url); /* eslint-disable-line no-console */

    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const reduxState = JSON.stringify(store.getState());

      /* eslint-disable */
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      /* eslint-enable */

      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.render('index', { html, reduxState });
    } else {
      console.log('Oops! Route not found...'); /* eslint-disable-line no-console */
      res.status(404).send('Not found');
    }
  });
};

export default matchRoute;
