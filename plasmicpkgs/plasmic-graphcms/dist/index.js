
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-graphcms.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-graphcms.cjs.development.js')
}
