import axios from 'axios';
import { logged } from './global';

export function listeConversation() {
    return new Promise((resolve, reject) => {
        const path = '/api/conversation/list'
        const headers = { headers: {"Authorization" : `Bearer ${logged()}`} }

        axios.get(`${global.Linkurl+path}`, headers)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}

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