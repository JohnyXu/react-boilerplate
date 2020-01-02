const path = require('path');
const webpack = require('webpack');

// An express-style development middleware for use with webpack bundles and allows for serving of the files emitted from webpack. This should be used for development only express风格的开发中间件
const webpackDevMiddleware = require('webpack-dev-middleware');

// Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.
const webpackHotMiddleware = require('webpack-hot-middleware');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  // webpack中间件
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  // 开发中间件 和热重载中间件
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    // 返回网页文件内容
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
