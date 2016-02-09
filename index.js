var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

/**
 * Receives POST messages from CloudMailIn when incoming email
 * messages are received.
 * 
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {             console.log('mail received!');} [description]
 * @return {[type]}      [description]
 */
app.post('/incoming_mail', function(req, res) {
  console.log('mail received!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});