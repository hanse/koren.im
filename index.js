
var express = require('express');
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

app.use(stylus.middleware({
  src: __dirname + '/public',
  dest: __dirname + '/public',
  compress: app.get('env') !== 'development',
  compile: function(str, path) {return stylus(str).set('filename', path).use(nib());}
}));

/**
 * Development Config
 */

if ('development' === app.get('env')) {
  app.use(express.static(__dirname + '/public'));
}

/**
 * Index Page
 */

app.get('/', function(req, res) {
  return res.render('index', {projects: require('./projects.json')});
});

/**
 * 404
 */

app.use(function(req, res, next) {
  res.status(404);
  return res.render('404', {back: '/'});
});

/**
 * Listen
 */

app.listen(app.get('port'), function() {
  console.log('app listening on %d', app.get('port'));
});
