const express = require('express');

const router = express.Router();

const Mensagem = require('../../models/sosmulher/mensagem');

router.get('/', async (req, res) => {
    const mensagens = await Mensagem.findAll({include: ['remetente', 'destinatario']});
    res.send(mensagens);
});

router.get('/:id', async (req, res) => {
    const mensagem = await Mensagem.findByPk(req.params.id, {include: ['remetente', 'destinatario']});
    res.send(mensagem);
});

router.post('/', async (req, res) => {//salvar
    let mensagem = await Mensagem.build(req.body); //create/build
    mensagem = await mensagem.save()
    res.send(mensagem);
});

router.put('/:id', async (req, res) => {//atualizar
    let mensagem = await Mensagem.findByPk(req.params.id);
    mensagem = await post.save(mensagem);
    res.send(mensagem);
});

router.delete('/:id', async (req, res) => {//delete
    let mensagem = await Mensagem.findByPk(req.params.id);
    mensagem.destroy();
    res.status(204).send();
});

module.exports = router;