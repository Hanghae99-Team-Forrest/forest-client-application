const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3436616299c5.ngrok.io",
      changeOrigin: true,
    })
  );
};