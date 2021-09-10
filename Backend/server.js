const http = require('http');
const app = require('./app');


// Clé privée (JsonWebToken) pour la signature et vérification du token
global.KEY_TOKEN = "W1R2DHGF9dsFHf845FH87VH8NgAINL-EQrXb75SPMRF0aBZ-A0i2lrnEv6zzqsz70QnJ256GFDZ024fif3RaUp2Py9lBRpVTsmnkGuawKGHJ6dbLSvIq548oAJKoTGdaer2344oACal0"


// Vérifie si le port est valide
const validatePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val
    if (port >= 0) return port
    return false;
};

// Contrôle d'erreur pour le lancement du serveur
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? "adress " + address : 'port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error; 
    }
};

// Définition du port / serveur
const port = validatePort(process.env.PORT || '3001');
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? "adress " + address : 'port ' + port;
    console.log('SERVER START: ' + bind);
});

server.listen(port);