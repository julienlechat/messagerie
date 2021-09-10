const express = require('express')
const route = express.Router()
const conversation = require('../controllers/conversation')

const token = require('../middleware/token')

route.post('/create', token.verify, conversation.create)
route.get('/list', token.verify, conversation.list)

module.exports = route