
var cluster = require('cluster');

if (cluster.isMaster) {

  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; ++i) {
    cluster.fork();
  }

  cluster.on('exit', function(worker) {
    console.log('Worker %d died', worker.id);
    cluster.fork();
  });

} else {

  var express = require('express');
  var bodyParser = require('body-parser');
  var stylus = require('stylus');
  var nib = require('nib');
  var cookieParser = require('cookie-parser');
  var session = require('express-session');
  var csrf = require('csurf');
  var app = module.exports = express();

  /**
   * Config
   */

  app.set('port', process.env.PORT || 5000);
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(cookieParser());
  app.use(session({secret: 'Yo'}));
  app.use(bodyParser());
  app.use(csrf({cookie: true}));
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

  app.post('/', function(req, res) {
    console.log(req.body);
    res.send(200);
  });

  /**
   * Index Page
   */

  app.get('*', function(req, res) {
    return res.render('index', {
      projects: require('./projects.json'),
      token: req.csrfToken()
    });
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

  app.listen(app.get('port'), '127.0.0.1', function() {
    console.log('Worker %d: app listening on %d (%s)', cluster.worker.id, app.get('port'), app.get('env'));
  });
}
