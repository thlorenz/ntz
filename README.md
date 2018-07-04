# ntz [![build status](https://secure.travis-ci.org/thlorenz/ntz.svg?branch=master)](http://travis-ci.org/thlorenz/ntz)

<a href="https://www.patreon.com/bePatron?u=8663953"><img alt="become a patron" src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="35px"></a>

Normalizes timezone inside a date string to be parsable convertible to a JavaScript Date.

```js
const ntz = require('ntz')

const original = 'Sunday, July 24, 19:32:00 CEST 2016'
console.log(new Date(original)) // => Invalid Date

const normalized = ntz(original)
console.log(new Date(normalized))// => 2016-07-24T17:32:00.000Z
```

## Installation

    npm install ntz

## [API](https://thlorenz.github.io/ntz)

## License

MIT
