import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './home';
import SignUp from './sign-up';
import Login from './login';
import About from './about';
import Rules, { BachFantasy, Leagues, Survivor } from './rules'
import Dash from './dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="signup" component={SignUp}/>
    <Route path="login" component={Login}/>
    <Route path="about" component={About}/>
    <Route path="dashboard" component={Dash}/>
    
    <Route path="rules" component={Rules}>
    	<IndexRoute component={Leagues}/>
    	<Route path="bachfantasy" component={BachFantasy}/>
    	<Route path="survivor" component={Survivor}/>
    </Route>
  </Route>
);