/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  // 前端webpack环境配置
  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    // webpack dev babel配置
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');

    /* eslint-disable no-console */
    // console.log('frontend.middleware.webpackconfig');
    // console.log(webpackConfig);
    /* eslint-enable no-console */
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
