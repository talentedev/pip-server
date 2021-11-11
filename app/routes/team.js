const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})

const {
  validateCreateTeam,
} = require('../controllers/company/validators')

const {
  getTeams,
  createTeam
} = require('../controllers/team')

/*
 * Get teams
 */
router.get('/', requireAuth, trimRequest.all, getTeams)

/*
 * Create a team
 */
router.post('/', requireAuth, trimRequest.all, validateCreateTeam, createTeam)

module.exports = router
