// src/app.cjs (CommonJS)
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Lambda!');
});

app.get('/test', (req, res) => {
  res.send('Test from Lambda!');
});

const handler = serverless(app);

module.exports = { handler };  // Use module.exports in CommonJS
