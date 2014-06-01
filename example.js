var prefectureJp = require('prefectureJp');
var prefs = prefectureJp({schema: 'jisx0401'});

prefs.search({pref: '京都'}, function(callback){
  callback.code;// => '26'
  callback.pref;// => '京都府'
});
