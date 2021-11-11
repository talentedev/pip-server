const Team = require('../../models/team')
const { buildErrObject } = require('./buildErrObject')

/**
 * Checks Team model if Team with an specific name exists
 * @param {string} name - name
 */
const teamExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Team.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'TEAM_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { teamExists }
