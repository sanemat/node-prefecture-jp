/*
 * prefecture-jp
 * https://github.com/sanemat/prefecture-jp
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Following the 'Node.js require(s) best practices' by
 * http://www.mircozeiss.com/node-js-require-s-best-practices/
 *
 * // Nodejs libs
 * var fs = require('fs'),
 *
 * // External libs
 * debug = require('debug'),
 *
 * // Internal libs
 * data = require('./data.js');
 */

var JIS_X_0401 = 'jisx0401';

function Prefecture(opts, cb) {
  opts = opts || {};
  this.cb = null;
  if (cb) { this.cb = cb; }
  if (typeof opts === 'function') { this.cb = opts; }
  this.schema = opts.schema || JIS_X_0401;
}

Prefecture.prototype = {
  search: function(needle, callback){
    var pref = { code: '26', pref: '京都府' };
    callback(pref);
  }
};

module.exports = function(opts, cb) {
  var s = new Prefecture(opts, cb);

  if (s.cb) { s.on('error', s.cb); }
  return s;
};

module.exports.Prefecture = Prefecture;
