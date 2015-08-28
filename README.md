# [c] tag tool

## Usage

Use the [online interactive version](http://monjak.github.io/ctag).
You can save it as a static HTML file anywhere you'd like.

You can also build a fresh version from source using `npm install && npm run build`.
The resulting `ctag.html` is a fresh version.

You can also use it as an npm module:

```js
npm install --save ctag@monjak/ctag
var ctag = require('ctag');
var output = ctag(input);
```

## Development

Run `npm install && npm start` and open `localhost:8389`.
