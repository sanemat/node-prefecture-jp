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
var ISO3166_2JP = 'iso3166-2jp';

function Prefecture(opts, cb) {
  opts = opts || {};
  this.cb = null;
  if (cb) { this.cb = cb; }
  if (typeof opts === 'function') { this.cb = opts; }

//  JIS_X_0401 or ISO3166_2JP
  if (opts.schema === ISO3166_2JP) {
    this.schema = ISO3166_2JP;
  } else {
    this.schema = JIS_X_0401;
  }
}

Prefecture.prototype = {
  search: function(needle, callback){
    var fs = require('fs');
    var parse = require('csv-parse');

    var parser = parse({}, function(err, data){
      if (err){ throw err; }

      var target = data.filter(function(row){
        // FIXME: I want remove if-else pattern
        if (needle.hasOwnProperty('pref') && needle.hasOwnProperty('code')){
          return (needle.pref === row[1] || needle.pref === row[1].slice(0, -1)) && needle.code === row[0];
        } else if (needle.hasOwnProperty('pref')){
          return needle.pref === row[1] || needle.pref === row[1].slice(0, -1);
        } else if (needle.hasOwnProperty('code')){
          return needle.code === row[0];
        }
      }).shift();
      var result = (target) ? { code: target[0], pref: target[1] } : null;
      callback(result);
    });

//  FIXME: directory traversal
    fs.createReadStream(__dirname + '/../prefecture-jp/' + this.schema + '.csv').pipe(parser);
  },
  all: function(callback){
    var fs = require('fs');
    var parse = require('csv-parse');

    var parser = parse({}, function(err, data) {
      if (err) {
        throw err;
      }
      var target = data.map(function(row){
        return { code: row[0], pref: row[1] };
      });
      callback(target);
    });

//  FIXME: directory traversal
    fs.createReadStream(__dirname + '/../prefecture-jp/' + this.schema + '.csv').pipe(parser);
  }
};

module.exports = function(opts, cb) {
  var s = new Prefecture(opts, cb);

  if (s.cb) { s.on('error', s.cb); }
  return s;
};

module.exports.Prefecture = Prefecture;
module.exports.JIS_X_0401 = JIS_X_0401;
module.exports.ISO3166_2JP = ISO3166_2JP;
