'use strict';

var prefectureJp = require('../lib/prefecture-jp.js');
var assert = require('power-assert');

describe('prefectureJp JIS X 0401', function () {
  var prefs;

  before(function(done){
    prefs = prefectureJp({schema: 'jisx0401'});
    done();
  });
  it('should return pref by pref', function(done){
    prefs.search({ pref: '京都府' }, function(target){
      assert.deepEqual(target, [{ code: '26', pref: '京都府' }]);
      done();
    })
  });
  it('should return pref by code', function(done){
    prefs.search({ code: '26' }, function(target){
      assert.deepEqual(target, [{ code: '26', pref: '京都府' }]);
      done();
    })
  });
  it('should return pref by code and pref', function(done){
    prefs.search({ code: '26', pref: '京都府' }, function(target){
      assert.deepEqual(target, [{ code: '26', pref: '京都府' }]);
      done();
    })
  });
  it('should return null by wrong code and valid pref', function(done){
    prefs.search({ code: '25', pref: '京都府' }, function(target){
      assert.deepEqual(target, []);
      done();
    })
  });
  it('should return pref by a part of pref', function(done){
    prefs.search({ pref: '滋賀' }, function(target){
      assert.deepEqual(target, [{ code: '25', pref: '滋賀県' }]);
      done();
    })
  });
  it('should return pref contains 県', function(done){
    prefs.search({ pref: '県' }, function(target){
      assert.deepEqual(target.length, 43);
      done();
    })
  });
});
