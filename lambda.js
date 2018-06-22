const serverless = require("serverless-http");
const { app, server } = require("./server");

exports.handler = (event, context, callback) => {
  app.prepare().then(() => {
    const handler = serverless(server);
    return handler(event, context, callback);
  });
};
