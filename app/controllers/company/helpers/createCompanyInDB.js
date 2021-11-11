const Company = require('../../../models/company')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a company in database
 * @param {Object} req - request object
 */
const createCompanyInDB = ({
  name = '',
  owner = '',
}) => {
  return new Promise((resolve, reject) => {
    const company = new Company({
      name,
      owner,
    })
    company.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = { createCompanyInDB }
