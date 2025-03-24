
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commerce-shopify.cjs.production.min.js')
} else {
  module.exports = require('./commerce-shopify.cjs.development.js')
}
