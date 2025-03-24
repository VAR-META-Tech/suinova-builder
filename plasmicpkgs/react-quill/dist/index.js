
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-quill.cjs.production.min.js')
} else {
  module.exports = require('./react-quill.cjs.development.js')
}
