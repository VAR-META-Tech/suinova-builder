
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commerce-local.cjs.production.min.js')
} else {
  module.exports = require('./commerce-local.cjs.development.js')
}
