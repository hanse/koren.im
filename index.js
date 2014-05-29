
var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var nib = require('nib');
var app = module.exports = express();

/**
 * Config
 */

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser());
app.locals.pretty = true;

/**
 * Development Config
 */

if ('development' === app.get('env')) {
  app.use(stylus.middleware({
    src: __dirname + '/public',
    dest: __dirname + '/public',
    compile: function(str, path) {return stylus(str).set('filename', path).use(nib());}
  }));

  app.use(express.static(__dirname + '/public'));
}

/**
 * Index Page
 */

app.get('/', function(req, res) {
  return res.render('index', {projects: require('./projects.json')});
});

/**
 * Listen
 */

var fs = require('fs');
https.createServer({
  key: fs.readFileSync(process.env.SSL_SERVER_KEY),
  cert: fs.readFileSync(process.env.SSL_SERVER_CERT)
}, app).listen(app.get('port'), function() {
  console.log('App listening on %d', app.get('port'));
});
