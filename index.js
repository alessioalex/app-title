"use strict";

var stack = require('callsite');
var path = require('path');
var fs = require('fs');

function getAppName(root) {
  var pkgPath = path.join(root, 'package.json');
  var pkgExists = fs.existsSync(pkgPath);

  if (pkgExists) {
    return require(pkgPath).name;
  } else {
    var newRoot = root.split(path.sep);
    newRoot.pop();
    return getAppName(newRoot.join(path.sep));
  }
}

function getAppRoot() {
  var projectPath = '';

  stack().forEach(function(site, i) {
    if (i === 1) {
      projectPath = site.getFileName();
    }
  });

  var root = projectPath.split(path.sep);
  root.pop();
  root = root.join(path.sep);

  return root;
}

function updateProcessTitle() {
  var root = getAppRoot();
  var appName = getAppName(root);

  process.title = appName;
}

module.exports = updateProcessTitle;
