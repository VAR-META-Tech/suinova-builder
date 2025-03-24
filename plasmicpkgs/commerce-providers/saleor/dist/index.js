
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commerce-saleor.cjs.production.min.js')
} else {
  module.exports = require('./commerce-saleor.cjs.development.js')
}
