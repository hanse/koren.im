#!/usr/bin/env/node

var screenshot = require('url-to-image');
var projects = require('../projects.json');

projects.forEach(function(project) {
  if (!project.url) return;
  screenshot(project.url, 'public/images/projects/' + project.name.toLowerCase() + '.png').fail(function(err) {
    console.error(err);
  }).done(function() {
    console.log('Grabbed %s!', project.url);
  });
});
