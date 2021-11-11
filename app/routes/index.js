const express = require('express')
const router = express.Router()

// Load Auth route
router.use('/auth', require('./auth'))

// Load Company route
router.use('/company', require('./company'))

// Load Team route
router.use('/team', require('./team'))

// Test route
// const { api } = require('../../config/eos')
// router.get('/test', async (req, res) => {
//   try {
//     const trans = await api.transact({
//       actions: [{
//         account: 'pipsystem',
//         name: 'hi',
//         authorization: [{
//           actor: 'pipsystem',
//           permission: 'active',
//         }],
//         data: {
//           from: 'pipsystem',
//           message: 'hi, pip',
//         },
//       }]
//     }, {
//       blocksBehind: 3,
//       expireSeconds: 30,
//     })
//     res.status(200).json({
//       success: trans
//     })
//   } catch (err) {
//     res.status(500).json({
//       error: err
//     })
//   }
// })

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
