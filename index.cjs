// handler.cjs (CommonJS)
const { handler: lambdaHandler } = require('./src/app.cjs');  // Use require instead of import

exports.handler = async (event) => {
    return await lambdaHandler(event);  // Call the Lambda handler
};
