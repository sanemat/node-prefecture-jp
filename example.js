var prefectureJp = require('prefectureJp');
var prefs = prefectureJp({schema: 'jisx0401'});

var pref1 = prefs.filter(function(pref){
  return pref.code == '26';
});
pref1.code;// => '26'
pref1.pref;// => '京都府'

var pref2 = prefs.filter(function(pref){
  return pref.pref == '京都府';
});
pref2.code;// => '26'
pref2.pref;// => '京都府'

prefs.search({pref: '京都'}, function(callback){
  callback.code;// => '26'
  callback.pref;// => '京都府'
});
