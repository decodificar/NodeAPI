const express = require('express');
const router = express.Router();

// LISTA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'mostrando todos os produtos',
    });
});

// ADICIONA UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'produto adicionado',
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id_produto = req.params.id_produto

    res.status(200).send({
        mensagem: 'mostra detalhes de um produto',
        id_produto: id_produto
    })
});

// EDITA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Edita um produto',
    });
});


// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluido',
    });
});

module.exports = router;
