const mysql = require('mysql')
const db = require('../mysql')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const { user, password } = req.body
        if (!user || !password ) throw "Vous avez oublié un champ !"

        const sql = mysql.format(`SELECT * from users WHERE login = ?`, [user])
        const dbUser = await db.query(sql)
        if (dbUser[0].length === 0) throw 'Login incorrect !'
        if (dbUser[0][0].password !== password) throw 'Mot de passe incorrect !'

        console.log(dbUser[0][0])
        const token = { token: jwt.sign({userId: dbUser[0][0].id, user: dbUser[0][0].login}, KEY_TOKEN, {expiresIn: '24h'}) }
        res.status(200).json(token)
    } catch(e) { res.status(500).json(e) }
}