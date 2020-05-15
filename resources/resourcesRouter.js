const express = require('express');

const resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  resources.get()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.post('/', (req, res) => {
  const newResource = req.body
  resources.post(newResource)
.then(resource => {
  res.json(newResource);
})
.catch(err => {
  res.status(500).json({ message: 'Failed to post project' });
});
});

module.exports = router;