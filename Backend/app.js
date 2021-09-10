const express = require('express');
const app = express();
const helmet = require('helmet');

// Chemin des routes
const user = require('./routes/user')
const conversation = require('./routes/conversation')

// Autorisations de partages de données
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
});

// Sécurisation + parse le body en json
app.use(helmet());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Route
app.use('/api/auth', user)
app.use('/api/conversation', conversation)


module.exports = app;