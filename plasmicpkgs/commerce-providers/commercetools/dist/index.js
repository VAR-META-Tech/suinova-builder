
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commerce-commercetools.cjs.production.min.js')
} else {
  module.exports = require('./commerce-commercetools.cjs.development.js')
}
