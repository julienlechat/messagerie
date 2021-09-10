const express = require('express')
const route = express.Router()

// Controllers
const conversation = require('../controllers/conversation')

// Middleware
const token = require('../middleware/token')

route.post('/create', token.verify, conversation.create)
route.post('/addMsg/:id', token.verify, conversation.addMsg)
route.get('/list', token.verify, conversation.list)
route.get('/:id', token.verify, conversation.loadConversation)

module.exports = route