const router = require('express').Router(),
handler = require('./index')

//example password hashing
//returns a bcrypt hashed password
router.get('/example', handler.example)

module.exports = router
