import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import User from './models/User';

const ENV = process.env;
const app = express();

mongoose.connect(ENV.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error!\n\n'));
db.once('open', () => {
	console.log('Successfully connected to mongo.');
});

app.set('port', (ENV.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(cookieParser());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// REST API
app.use('/api', routes());

app.get('*', (req, res) => {
  res.render('index');
});

/**
 * Receives POST messages from CloudMailIn when incoming email
 * messages are received.
 *
 * Idea is to parse blog post emails from bachfantasy.com to
 * populate the DB with the scores for each week.
 * 
 * @param  {[type]} req  [description]
 * @param  {[type]} res  [description]
 * @return {[type]}      [description]
 */
// app.post('/incoming_mail', (req, res) => {
//   console.log('mail received!');
// });

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});