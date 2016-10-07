import express from 'express';
import apiRoutes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './src/js/routes';
import reducers from './src/js/reducers';
import User from './models/User';

const ENV = process.env;
const app = express();

mongoose.connect(ENV.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error!\n\n'));
db.once('open', console.log.bind(console, 'Successfully connected to mongo.'));

app.set('port', (ENV.PORT || 5000));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(cookieParser());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// REST API
app.use('/api', apiRoutes());

app.get('*', (req, res) => {
	let preloadedState;
	if (req.cookies && req.cookies.username) {
		// TODO - get user data from mongo and prepopulate state
		// preloadedState = getUser(req.cookies.username);
	}

	const store = createStore(reducers, preloadedState);

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		console.log('handling [ %s ]', req.url);
		
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
    	let reduxState = JSON.stringify(store.getState());
    	let html = renderToString(
    		<Provider store={store}>
    			<RouterContext {...renderProps} />
    		</Provider>
    	);

      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.render('index', { html, reduxState });
    } else {
      console.log('Oops! Not found...');
      res.status(404).send('Not found')
    }
  });
});

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});