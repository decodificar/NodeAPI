const http = require('http'); // cria serviço de http
const app = require('./app');
const port = process.env.PORT || 3000; // define uma porta padrão
const server = http.createServer(app); // cria um servidor

server.listen(port);


