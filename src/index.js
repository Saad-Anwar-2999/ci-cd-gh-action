// src/index.js (ES Modules)
import express from 'express';
import serverless from 'serverless-http';  // Import serverless-http

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Lambda!');
});

// Wrap the Express app with serverless-http to make it Lambda-compatible
const handler = serverless(app);

// Export the handler function for Lambda
export { handler };
