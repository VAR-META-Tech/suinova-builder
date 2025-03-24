
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-youtube.cjs.production.min.js')
} else {
  module.exports = require('./react-youtube.cjs.development.js')
}
