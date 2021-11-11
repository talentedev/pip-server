const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')

const {
  register,
  verify,
  // forgotPassword,
  // resetPassword,
  login,
} = require('../controllers/auth')

const {
  validateRegister,
  validateVerify,
  validateForgotPassword,
  validateResetPassword,
  validateLogin
} = require('../controllers/auth/validators')

/*
 * Register a user
 */
router.post('/register', trimRequest.all, validateRegister, register)

/*
 * Verify user's email
 */
router.get('/verify', trimRequest.all, validateVerify, verify)

// /*
//  * Forgot password route
//  */
// router.post('/forgot', trimRequest.all, validateForgotPassword, forgotPassword)

// /*
//  * Reset password route
//  */
// router.post('/reset', trimRequest.all, validateResetPassword, resetPassword)

/*
 * Login route
 */
router.post('/login', trimRequest.all, validateLogin, login)

module.exports = router
