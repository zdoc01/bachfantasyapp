/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import User from './models/User';
import serverRoutes from './routes';
import ssr from './ssr';

const ENV = process.env;
const app = express();

const onError = console.error.bind(console, 'Mongo connection error!\n\n');
const onOpen = console.log.bind(console, 'Successfully connected to mongo.');

mongoose.connect(ENV.MONGODB_URI);
const db = mongoose.connection;
db.on('error', onError);
db.once('open', onOpen);

app.set('port', ENV.PORT || 5000);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(cookieParser());

// views is directory for all template files
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// REST API
app.use('/api', serverRoutes());

app.get('*', (req, res) => {
  const username = req.cookies && req.cookies.username;
  if (username) {
    console.log('username found in cookie!');

    /* eslint-disable-next-line consistent-return */
    return User.findOne({ username }, (err, user) => {
      if (err) {
        return ssr(req, res);
      }

      console.log('user found in mongo!');

      ssr(req, res, { user: user.toJSON() });
    });
  }

  return ssr(req, res);
});

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});
