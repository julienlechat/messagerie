const mysql = require('mysql')
const db = require('../mysql')
var moment = require('moment');
require('moment/locale/fr');

/*
    Affiche la liste des conversations ouvertes
*/
exports.list = async (req, res) => {
    try {
        const sql = mysql.format(`SELECT c.id, u.login
                                  from conversations c
                                  INNER JOIN users u on c.user = u.id
                                  WHERE status = 1
                                  ORDER BY id DESC`)
        const list = await db.query(sql)

        res.status(200).json(list[0])
    } catch(e) { res.status(500).json(e) }
}

/*
    Affiche les messages d'une conversation à l'aide de son Id
*/
exports.loadConversation = async (req, res) => {
    try {
        const { id } = req.params
        const sql = mysql.format(`SELECT uc.login AS creator, c.status, u.login, m.msg
                                  FROM messages m
                                  INNER JOIN conversations c on c.id = m.conversation
                                  INNER JOIN users u on u.id = m.user
                                  INNER JOIN users uc on uc.id = c.user
                                  WHERE m.conversation = ?
                                  ORDER BY m.date`, [id])
        const list = await db.query(sql)
        res.status(200).json(list[0])

    } catch(e) { res.status(500).json(e) }
}

/*
    Ajoute un message dans la conversation
*/
exports.addMsg = async (req, res) => {
    try {
        const { id } = req.params
        const { msg } = req.body
        const { userId } = req.token

        if (!msg || !id) throw 'il manque une information'

        const sql = mysql.format(`SELECT * from conversations WHERE id = ?`, [id])
        const conversationExist = await db.query(sql)
        if (conversationExist[0].length === 0) throw 'conversation inexistante'

        const date = moment().format("YYYY-MM-DD HH:mm:ss")

        const sql2 = mysql.format(`INSERT INTO messages(user, conversation, msg, date) VALUES (?, ?, ?, ?)`, [userId, id, msg, date])
        const addMsg = await db.query(sql2)

        if (addMsg[0].affectedRows !== 1) throw 'error'
        res.status(201).json('ok')

    } catch(e) { res.status(500).json(e) }
}

/*
    Crée une nouvelle conversation et ajoute le premier message envoyé par l'utilisateur
*/
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