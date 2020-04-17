const express = require('express');
const app = express();

app.use((req, res, next) => { // requisição, resposta e next
    res.status(200).send({
        mensagem: 'Tudo certo :)'
    });
}); 

module.exports = app;