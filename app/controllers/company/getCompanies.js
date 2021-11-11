const Company = require('../../models/company')
const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Get companies
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCompanies = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Company, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCompanies }
