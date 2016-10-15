import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import User from './models/User';
import serverRoutes from './routes';
import matchRoute from './matchRoute';

const ENV = process.env;
const app = express();

mongoose.connect(ENV.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error!\n\n'));
db.once('open', console.log.bind(console, 'Successfully connected to mongo.'));

app.set('port', (ENV.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(cookieParser());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// REST API
app.use('/api', serverRoutes());

app.get('*', (req, res) => {
  const username = req.cookies && req.cookies.username;
	if (username) {
    console.log('username found in cookie!');
		return User.findOne({username: username}, (err, user) => {
      if (err) { return matchRoute(req, res); }

      console.log('user found in mongo!');

      // match route here
      matchRoute(req, res, { user: user.toJSON() });
    });
	}

	return matchRoute(req, res);
});

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});