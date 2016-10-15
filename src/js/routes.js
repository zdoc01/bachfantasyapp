import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './home';
import SignUp from './sign-up';
import { Login } from './login';
import About from './about';
import Games, { BachFantasy, Survivor } from './games'
import Dash from './dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="signup" component={SignUp}/>
    <Route path="login" component={Login}/>
    <Route path="about" component={About}/>
    <Route path="dashboard" component={Dash}/>

    <Route path="games" component={Games}/>
    <Route path="games/bachfantasy" component={BachFantasy}/>
    <Route path="games/survivor" component={Survivor}/>
  </Route>
);