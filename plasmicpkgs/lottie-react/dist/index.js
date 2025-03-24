
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lottie-react.cjs.production.min.js')
} else {
  module.exports = require('./lottie-react.cjs.development.js')
}
