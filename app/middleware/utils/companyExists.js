const Company = require('../../models/company')
const { buildErrObject } = require('./buildErrObject')

/**
 * Checks Company model if company with an specific name exists
 * @param {string} name - name
 */
const companyExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Company.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'COMPANY_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { companyExists }
