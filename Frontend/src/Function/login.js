import axios from 'axios';

/*
    Requete connexion de l'utilisateur, retourne un token
*/
export function FnLogin(user, password) {
    return new Promise((resolve, reject) => {
        const path = '/api/auth/login'
        if (!user || !password) return reject('Pseudo et/où mot de passe est vide.')

        axios.post(`${global.Linkurl+path}`, {
                    user: user, password: password })
            .then((res) => resolve(res.data))
            .catch((e) => reject(e))
    })
}