var page = require('page');
var request = require('superagent');
var validator = require('validator');

var sections = document.querySelectorAll('section');
var contentNodes = {};

for (var i = 0; i < sections.length; ++i) {
  contentNodes[sections[i].id] = sections[i];
}

function activateSection(section) {
  for (var node in contentNodes)
    contentNodes[node].classList.remove('active');
  contentNodes[section].classList.add('active');
}

function noop() {}

page('/', noop);

page('/prosjekter', function() {
  activateSection('projects');
});

page('/kontakt', function() {
  activateSection('contact');
});

function dom(selector) {
  return document.querySelector(selector);
}

function setMessage(msg) {
  dom('#form-message').innerText = msg;
  setTimeout(function() {
    dom('#form-message').innerText = '';
  }, 3000);
}

function validateEmail(email) {
  if (!email.name || !email.email || !email.body || !validator.isEmail(email.email))
    return false;
  return true;
}

function submit() {
  var email = {
    _csrf: dom('#csrf').value,
    name: dom('#name').value,
    email: dom('#email').value,
    body: dom('#body').value
  };

  if (!validateEmail(email)) return setMessage('Alle feltene må fylles inn og være gyldige.');
  var button = dom('button');
  button.innerText = 'Sender...';
  button.disabled = true;

  request
    .post('/')
    .send(email)
    .end(function(res) {
      if (res.ok) {
        button.innerText = 'Sendt!';
        dom('form').style.display = 'none';
        return dom('#form-message').innerText = 'Takk for henvendelsen!';
      }
      setMessage('Noe gikk galt');
      button.disabled = false;
    });
}

dom('button').addEventListener('click', function(e) {
  e.preventDefault();
  submit();
  return false;
});


page();
