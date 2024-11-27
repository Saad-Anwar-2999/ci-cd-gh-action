export const handler = async (event) => {
  // Extract request details (if needed) from the event object
  const { httpMethod, path, body } = event;
  // Basic routing logic 
  if (httpMethod === 'GET' && path === '/') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Hello Lambda From Gh-action App!',
    };
  }

  // Handle unsupported routes
  return {
    statusCode: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: 'Not Found',
  };
};
