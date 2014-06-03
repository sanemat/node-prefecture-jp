# prefecture-jp
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

Search the JIS/ISO code by prefecture in Japan, the prefecture by JIS/ISO code and so on.

## Install

```bash
$ npm install --save prefecture-jp
```


## Usage

```javascript
var prefectureJp = require('prefecture-jp');
var prefs = prefectureJp({ schema: prefectureJp.JIS_X_0401 });

prefs.search({pref: '愛知'}, function(callback){
  callback.code;// => '23'
  callback.pref;// => '愛知県'
});
```

[example](https://github.com/sanemat/node-prefecture-jp/blob/master/example/simple.js)

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## License

Copyright (c) 2014 sanemat. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/prefecture-jp
[npm-image]: https://badge.fury.io/js/prefecture-jp.svg
[travis-url]: https://travis-ci.org/sanemat/node-prefecture-jp
[travis-image]: https://travis-ci.org/sanemat/node-prefecture-jp.svg?branch=master
[daviddm-url]: https://david-dm.org/sanemat/node-prefecture-jp.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/sanemat/node-prefecture-jp
[coveralls-url]: https://coveralls.io/r/sanemat/node-prefecture-jp
[coveralls-image]: https://coveralls.io/repos/sanemat/node-prefecture-jp/badge.png
