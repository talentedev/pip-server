const { findUser } = require('./findUser')
const { passwordsDoNotMatch } = require('./passwordsDoNotMatch')
const { registerUser } = require('./registerUser')
const { returnRegisterToken } = require('./returnRegisterToken')
const {
  saveUserAccessAndReturnToken
} = require('./saveUserAccessAndReturnToken')
const { setUserInfo } = require('./setUserInfo')
const { verificationExists } = require('./verificationExists')
const { verifyUser } = require('./verifyUser')

module.exports = {
  findUser,
  passwordsDoNotMatch,
  registerUser,
  returnRegisterToken,
  saveUserAccessAndReturnToken,
  setUserInfo,
  verificationExists,
  verifyUser
}
