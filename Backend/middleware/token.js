const jwt = require('jsonwebtoken')

/*
    Intercepte le token, le vérifie et rend le contenu dans req.token
*/
exports.verify = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        tokenDecrypt = jwt.verify(token, KEY_TOKEN)

        if (isNaN(tokenDecrypt.userId)) throw 'token invalid: not a number'
        req.token = tokenDecrypt

        next()
    } catch(e) { res.status(500).json('token invalid') }
}