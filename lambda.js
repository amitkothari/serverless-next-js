const { app, server } = require("./server");
const awsServerlessExpress = require("aws-serverless-express");

exports.handler = (event, context) => {
  app.prepare().then(() => {
    return awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(server),
      event,
      context
    );
  });
};

// const serverless = require("serverless-http");

// exports.handler = (event, context, callback) => {
//   app.prepare().then(() => {
//     const handler = serverless(server);
//     return handler(event, context, callback);
//   });
// };
