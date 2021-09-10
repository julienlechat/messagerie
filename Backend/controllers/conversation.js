const mysql = require('mysql')
const db = require('../mysql')
var moment = require('moment');
const { now } = require('moment');
require('moment/locale/fr');

exports.list = async (req, res) => {
    try {
        const sql = mysql.format(`SELECT * from conversations WHERE status = 1 ORDER BY id DESC`)
        const list = await db.query(sql)

        res.status(200).json(list[0])

    } catch(e) { res.status(500).json(e) }
}

exports.create = async (req, res) => {
    try {
        const { userId } = req.token
        const { msg } = req.body

        if (!msg) throw "Vous n'avez pas écrit de message."

        const sql = mysql.format(`INSERT INTO conversations(user) VALUES (?)`, [userId])
        const addNewConversation = await db.query(sql)

        if (addNewConversation[0].affectedRows !== 1) throw 'error'

        const date = moment().format("YYYY-MM-DD HH:mm:ss")
        
        const sql2 = mysql.format(`INSERT INTO messages(user, conversation, msg, date) VALUES (?, ?, ?, ?)`, [userId, addNewConversation[0].insertId, msg, date])
        const addNewMsg = await db.query(sql2)
        if (addNewMsg[0].affectedRows !== 1) throw 'error'
        res.status(201).json('ok')

    } catch(e) { res.status(500).json(e) }
}