import express from 'express';
import routes from './routes';

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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