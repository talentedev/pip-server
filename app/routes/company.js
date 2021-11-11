const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})

const {
  validateCreateCompany,
} = require('../controllers/company/validators')

const {
  getCompanies,
  createCompany
} = require('../controllers/company')

/*
 * Get companies
 */
router.get('/', requireAuth, trimRequest.all, getCompanies)

/*
 * Create a company
 */
router.post('/', requireAuth, trimRequest.all, validateCreateCompany, createCompany)

module.exports = router
