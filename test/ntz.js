'use strict'

const test = require('tape')
const ntz = require('../')

test('\nreplacing known timezones', function(t) {
  [ [ 'Sunday, July 24, 19:32:00 CEST 2016', 'Sunday, July 24, 19:32:00 GMT+02 2016' ]
  , [ 'Sunday, July 24, 19:32:00 CDT 2016', 'Sunday, July 24, 19:32:00 GMT-05 2016' ]
  , [ 'Mon, 25 Jul 2016 00:32:00 GMT', 'Mon, 25 Jul 2016 00:32:00 GMT+00' ]
  , [ 'Mon, 25 Jul 2016 00:32:00 THA', 'Mon, 25 Jul 2016 00:32:00 GMT+07' ]
  ].forEach(check)

  function check([ s, expected ]) {
    t.equal(ntz(s), expected)
  }

  t.end()
})

test('\nreplacing unknown timezones returns original string', function(t) {
  [ 'Sunday, July 24, 19:32:00 WTF 2016'
  , 'Mon, 25 Jul 2016 00:32:00 THHA'
  ].forEach(check)

  function check(s) {
    t.equal(ntz(s), s)
  }

  t.end()
})
