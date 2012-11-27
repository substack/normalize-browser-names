# normalize-browser-names

normalize browser names

# example

``` js
var normalize = require('normalize-browser-names');

console.dir(normalize(['ie8','ff/12.']));
console.dir(normalize({'ie':8,'ff':[12,'5.']}));
```

```
$ node example/normalize.js
{ iexplore: [ '8.0' ], firefox: [ '12.0' ] }
{ iexplore: [ '8.0' ], firefox: [ '12.0', '5.0' ] }
```

# methods

``` js
var normalize = require('normalize-browser-names')
```

## normalize(browsers)

Given an array of browser version strings or an object mapping browser names to
arrays of browser versions or a single browser version, return an object mapping
browser names to arrays of string versions.

For the aliases used, consult the source of this module in `index.js`.

# install

With [npm](https://npmjs.org) do:

```
npm install normalize-browser-names
```

# license

MIT
