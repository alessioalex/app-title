"use strict";

var getParentPkgJson = require('parent-package');

function updateProcessTitle(appName, cb) {
  if (typeof appName === 'function') {
    cb = appName;
    appName = null;
  }

  if (appName) {
    process.title = appName;
    cb && cb();
  } else {
    getParentPkgJson(require.main.filename, function(err, data, pkgJsonPath) {
      if (!err) {
        process.title = data.name;
        cb && cb();
      }
    });
  }
}

module.exports = updateProcessTitle;
