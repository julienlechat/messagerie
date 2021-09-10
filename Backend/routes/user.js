const express = require('express')
const route = express.Router()
const user = require('../controllers/user')

route.post('/login', user.login)

module.exports = route