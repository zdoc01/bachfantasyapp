import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import SignUp from './sign-up';
import Login from './login';
import About from './about';
import Games, { BachFantasy, Survivor } from './games';
import Dash from './dashboard';
import PrivateRoute from './private-route';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <PrivateRoute path="/dashboard" component={Dash} />
    <Route exact path="/games" component={Games} />
    <Route path="/games/bachfantasy" component={BachFantasy} />
    <Route path="/games/survivor" component={Survivor} />
  </Switch>
);
