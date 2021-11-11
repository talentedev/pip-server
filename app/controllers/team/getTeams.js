const Team = require('../../models/team')
const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Get teams
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTeams = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Team, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getTeams }
