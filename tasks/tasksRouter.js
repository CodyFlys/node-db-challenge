const express = require('express');

const Schemes = require('./tasks-model')

const router = express.Router();

router.get('/', (req, res) => {
    Schemes.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        })
})

router.post('/', (req, res) => {
    const newTask = req.body
    Schemes.post(newTask)
  .then(task => {
    res.json(newTask);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to post task' });
  });
})

module.exports = router;