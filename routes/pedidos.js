const express = require('express');
const router = express.Router();

// LISTA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'mostrando todos os produtos',
    });
});

// ADICIONA UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'produto adicionado',
    });
});

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id_pedido = req.params.id_pedido

    res.status(200).send({
        mensagem: 'mostra detalhes de um produto',
        id_pedido: id_pedido
    })
});

// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluido',
    });
});

module.exports = router;
