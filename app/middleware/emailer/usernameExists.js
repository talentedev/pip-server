const User = require('../../models/user')
const { buildErrObject } = require('../../middleware/utils')

/**
 * Checks User model if user with an specific username exists
 * @param {string} username - username
 */
const usernameExists = (username = '') => {
  return new Promise((resolve, reject) => {
    User.findOne(
      {
        username
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'USERNAME_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { usernameExists }
