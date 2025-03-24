
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-parallax-tilt.cjs.production.min.js')
} else {
  module.exports = require('./react-parallax-tilt.cjs.development.js')
}
