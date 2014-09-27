
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
  app.use(session({
    secret: process.env.SESSION_SECRET || 'Yo',
    saveUninitialized: true,
    resave: true
  }));
  app.use(bodyParser.json());
  app.use(csrf({cookie: true}));
  app.locals.pretty = true;

  /**
   * Development Config
   */

  if ('development' === app.get('env')) {
    app.use(express.static(__dirname + '/public'));
  }

  var smtp = nodemailer.createTransport({
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

    if (errors.length > 0) return res.send(403, errors);

    smtp.sendMail({
      from: name + '<' + email + '>',
      to: process.env.CONTACT_MAIL_TO,
      subject: 'Henvendelse fra koren.im: ' + name,
      replyTo: email,
      text: emailTemplate(name, email, body)
    }, function(err, data) {
      if (err) return res.status(500).send(err);
      res.status(200).end();
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
