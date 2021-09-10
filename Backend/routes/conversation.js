const express = require('express')
const route = express.Router()

// Controllers
const conversation = require('../controllers/conversation')

// Middleware
const token = require('../middleware/token')

route.post('/create', token.verify, conversation.create)
route.post('/addMsg/:id', token.verify, conversation.addMsg)
route.put('/close/:id', token.verify, conversation.close)
route.get('/list', token.verify, conversation.list)
route.post('/:id', token.verify, conversation.loadConversation)
route.get('/all', token.verify, conversation.loadAllConvers)

module.exports = route