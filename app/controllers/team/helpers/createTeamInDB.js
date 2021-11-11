const Team = require('../../../models/team')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a team in database
 * @param {Object} req - request object
 */
const createTeamInDB = ({
  name = '',
  company = '',
  owner = '',
}) => {
  return new Promise((resolve, reject) => {
    const team = new Team({
      name,
      company,
      owner,
    })
    team.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = { createTeamInDB }
