import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import SignUp from './SignUp';
import About from './About';
import Rules from './Rules';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/about" component={About}/>
    <Route path="/rules" component={Rules}/>
  </Route>
);