const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker App!');
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
