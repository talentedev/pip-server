const { matchedData } = require('express-validator')
const { getUserIdFromToken } = require('../../middleware/auth')
const { handleError, jwtExtractor } = require('../../middleware/utils')
const { createCompanyInDB } = require('./helpers')
const { companyExists } = require('../../middleware/utils')

/**
 * Create a company
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createCompany = async (req, res) => {
  try {
    const token = jwtExtractor(req)
    let userId = await getUserIdFromToken(token)
    req = matchedData(req)
    const doesCompanyExists = await companyExists(req.name)
    if (!doesCompanyExists) {
      const item = await createCompanyInDB({ name: req.name, owner: userId})
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createCompany }
