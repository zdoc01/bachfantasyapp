import React from 'react';
import { Redirect, Route } from 'react-router';
import { element, func, node, oneOfType, shape } from 'prop-types';

/**
 * Checks application state for user auth status.
 *
 * @param {Object} store Redux store instance
 * @returns <Boolean> indicating whether or not user is authenticated
 */
const isAuthenticated = store => {
  const state = store.getState();
  const username = state && state.user && state.user.username;
  return !!username;
};

/**
 * Conditionally renders the provided component for the
 * matched route path if the user has successfully authenticated.
 * Otherwise, redirects to /login.
 *
 * @param {Object} props    React props
 * @param {Object} context  React context
 * @returns <Route> component instance
 */
const PrivateRoute = ({ component: Component, ...rest }, context) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated(context.store) ? (
        <Component {...rest} />
      ) : (
        <Redirect
          /* eslint-disable-next-line react/prop-types */
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.contextTypes = {
  store: shape({ getState: func.isRequired }).isRequired,
};

PrivateRoute.propTypes = {
  component: oneOfType([func, node, element]).isRequired,
};

export default PrivateRoute;
