// Create web server
const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json({ status: 'success', message: 'Comment added' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});