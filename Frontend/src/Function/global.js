global.Linkurl = 'http://localhost:3001'

export function logged() {
    if (localStorage.getItem('account')) return localStorage.getItem('token')
    return false
}