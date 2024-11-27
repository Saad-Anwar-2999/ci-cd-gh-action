// // handler.js
// import { handler } from './src/index.js';  // Import the handler from src/index.js

// export { handler };  // Export the handler for AWS Lambda
exports.handler = async (event) => {
    // Perform some operation (e.g., return a message)
    const responseMessage =  `Hello, Saad !`;

    // Return a formatted response object
    return {
        statusCode: 200,
        body: JSON.stringify({ message: responseMessage }),
    };
};