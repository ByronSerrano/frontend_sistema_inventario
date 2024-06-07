const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/search',
        createProxyMiddleware({
            target: 'https://s6qc8316-5000.use2.devtunnels.ms/',
            changeOrigin: true,
        })
    );
};
