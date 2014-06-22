var page = require('page');
var request = require('superagent');

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

function submit() {
  request
    .post('/')
    .send({
      _csrf: dom('#csrf').value,
      name: dom('#name').value,
      email: dom('#email').value,
      body: dom('#body').value
    })
    .end(function(res) {
      if (res.ok) return setMessage('Takk!');
      setMessage('Noe gikk galt');
    });
}

dom('button').addEventListener('click', function(e) {
  e.preventDefault();
  submit();
  return false;
});


page();
