
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
  var util = require('util');
  var nodemailer = require('nodemailer');
  var validator = require('validator');
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

  var smtp = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  function emailTemplate(name, email, body) {
    return util.format('Mail fra %s (%s):\n\n %s', name, email, body);
  }

  app.post('/', function(req, res) {

    var name = validator.stripLow(req.body.name);
    var email = validator.stripLow(req.body.email);
    var body = req.body.body;
    var errors = [];

    if (!req.body.name) errors.push('name is required');
    if (!req.body.email) errors.push('email is required');
    if (!req.body.body) errors.push('body is required');
    if (!validator.isEmail(req.body.email)) errors.push('email must look valid');

    console.log(errors);
    if (errors.length > 0) return res.send(403, errors);

    smtp.sendMail({
      from: name + '<' + email + '>',
      to: 'hkri@koren.im',
      subject: 'Henvendelse fra koren.im: ' + name,
      replyTo: email,
      text: emailTemplate(name, email, body)
    }, function(err, data) {
      console.log(err, data)
      if (err) return res.send(500, err);
      res.send(200);
    });
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
