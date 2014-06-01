'use strict';

var prefectureJp = require('../lib/prefecture-jp.js');
var assert = require('power-assert');

describe('prefectureJp JIS X 0401', function () {
  var prefs;

  before(function(done){
    prefs = prefectureJp({schema: 'jisx0401'});
    done();
  });
  it('should return pref', function(done){
    prefs.search({ pref: '京都府' }, function(target){
      assert.deepEqual(target, { code: '26', pref: '京都府' });
      done();
    })
  });
});
