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

var prefectureJp = require('../lib/prefecture-jp.js');
var prefs = prefectureJp({schema: 'jisx0401'});

prefs.search({pref: '愛知'}, function(callback){
  var pref = callback.shift();
  pref.code;// => '23'
  pref.pref;// => '愛知県'
});
