import axios from 'axios';
import { logged } from './global';

/*
    Requete retournant la liste des conversations ouvertes
*/
export function listeConversation() {
    return new Promise((resolve, reject) => {
        const path = '/api/conversation/list'
        const headers = { headers: {"Authorization" : `Bearer ${logged()}`} }

        axios.get(`${global.Linkurl+path}`, headers)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}

/*
    Requete retournant la les messages d'une conversation
*/
export function loadConversation(id) {
    return new Promise((resolve, reject) => {
        const path = '/api/conversation/'+id
        const headers = { headers: {"Authorization" : `Bearer ${logged()}`} }

        axios.get(`${global.Linkurl+path}`, headers)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}

/*
    Requete ajoutant un message dans une conversation
*/
export function addMsg(id, msg) {
    return new Promise((resolve, reject) => {
        const path = '/api/conversation/addMsg/'+id
        const headers = { headers: {"Authorization" : `Bearer ${logged()}`} }
        if (!msg || !id) return reject('un champ est vide.')

        axios.post(`${global.Linkurl+path}`, {
                    msg: msg }, headers)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}

/*
    Requete utilisée pour créer une nouvelle conversation
*/
export function createConversation(msg) {
    return new Promise((resolve, reject) => {
        const path = '/api/conversation/create'
        const headers = { headers: {"Authorization" : `Bearer ${logged()}`} }
        if (!msg) return reject('le champ message est vide.')

        axios.post(`${global.Linkurl+path}`, {
                    msg: msg }, headers)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}