'use strict'

const ntz = require('./')

const original = 'Sunday, July 24, 19:32:00 CEST 2016'
console.log(new Date(original)) // => Invalid Date

const normalized = ntz(original)
console.log(new Date(normalized))// => 2016-07-24T17:32:00.000Z
