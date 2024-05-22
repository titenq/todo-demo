const express = require('express');

const Todo = require('../model/Todo.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.json(todos);
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao listar Todos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { content } = req.body;

    const todo = await Todo.create({ content });

    return res.json(todo);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Erro ao criar Todo' });
  }
});

router.patch('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { content } = req.body;

    await Todo.findOneAndUpdate({ _id }, { content });

    return res.json({ message: 'Todo editado com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Erro ao editar Todo' });
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    await Todo.deleteOne({ _id }).exec();

    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Erro ao deletar Todo' });
  }
});

module.exports = router;
