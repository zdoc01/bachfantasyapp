import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Rules from './components/Rules';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route path="/rules" component={Rules}/>
  </Route>
);