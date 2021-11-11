const { matchedData } = require('express-validator')
const { getUserIdFromToken } = require('../../middleware/auth')
const { handleError, jwtExtractor } = require('../../middleware/utils')
const { createTeamInDB } = require('./helpers')
const { teamExists } = require('../../middleware/utils')

/**
 * Create a team
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createTeam = async (req, res) => {
  try {
    const token = jwtExtractor(req)
    let userId = await getUserIdFromToken(token)
    req = matchedData(req)
    const doesTeamExists = await teamExists(req.name)
    if (!doesTeamExists) {
      const item = await createTeamInDB({ name: req.name, company: req.company, owner: userId})
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createTeam }
