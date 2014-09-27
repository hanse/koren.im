#!/usr/bin/env phantomjs

var async = require('async');
var projects = require('../projects.json');
var page = require('webpage').create();

page.viewportSize = {width: 1440, height: 990};
page.clipRect = {width: 1440, height: 990};

async.eachSeries(projects, function(project, fn) {
  console.log('Grabbed', project.url, '!');

  if (!project.url) return fn('no urls');
  page.open(project.url, function(status) {
    if (status !== 'success') return fn(status);
    window.setTimeout(function() {
      page.render('public/images/projects/' + project.slug + '.png');
      fn();
    }, 2000);
  });
}, function(err) {
  console.log('Failed', err)
  phantom.exit();
});
