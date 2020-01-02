const path = require('path');
const express = require('express');

// Node.js compression middleware
// https://github.com/expressjs/compression
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  // 静态资源文件
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
