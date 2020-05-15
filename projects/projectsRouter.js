const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    projects.get()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.post('/', (req, res) => {
  const newProject = req.body
  projects.post(newProject)
.then(projects => {
  res.json(newProject);
})
.catch(err => {
  res.status(500).json({ message: 'Failed to post project' });
});
});

module.exports = router;