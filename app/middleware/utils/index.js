const { buildErrObject } = require('./buildErrObject')
const { handleError } = require('./handleError')
const { itemNotFound } = require('./itemNotFound')
const { removeExtensionFromFile } = require('./removeExtensionFromFile')
const { validateResult } = require('./validateResult')
const { jwtExtractor } = require('./jwtExtractor')
const { companyExists } = require('./companyExists')
const { teamExists } = require('./teamExists')

module.exports = {
  buildErrObject,
  handleError,
  itemNotFound,
  removeExtensionFromFile,
  validateResult,
  jwtExtractor,
  companyExists,
  teamExists
}
