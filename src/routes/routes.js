const router = require('express').Router(),
api = require('./api/router')

// http://url/api/v1
router.use('/v1', api)

module.exports = router
