const { matchedData } = require('express-validator')
const { registerUser, setUserInfo, returnRegisterToken } = require('./helpers')
const { handleError } = require('../../middleware/utils')
const { emailExists, usernameExists } = require('../../middleware/emailer')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const register = async (req, res) => {
  try {
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    const doesUsernameExists = await usernameExists(req.username)
    if (!doesEmailExists && !doesUsernameExists) {
      const item = await registerUser(req)
      const userInfo = await setUserInfo(item)
      const response = await returnRegisterToken(item, userInfo)
      res.status(201).json(response)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { register }
