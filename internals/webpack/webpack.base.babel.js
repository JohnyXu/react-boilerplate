/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

// 公用的webpack配置，options来自开发环境或者生产环境
module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ), // Merge with env dependent settings
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        // Preprocess our own .css files css预处理 ？代表可选 $代表以xx结尾
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules 第三方的css处理
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 字体文件处理
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        // svg文件处理
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        // 图片处理 \. 正则表达式转义符
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            // Minify PNG, JPEG, GIF, SVG and WEBP images with imagemin
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        // Exports HTML as string. HTML is minimized when the compiler demands.
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        // mp4文件处理
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ]),
  resolve: {
    // webpack解析模块时应该搜索的目录 前面的优先级高
    modules: ['node_modules', 'app'],
    // 解析确定的扩展名的文件
    extensions: ['.js', '.jsx', '.react.js'],
    // 当从 npm 包中导入模块时（例如，import * as D3 from 'd3'），此选项将决定在 package.json 中使用哪个字段导入模块
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  // 此选项控制是否生成，以及如何生成 source map
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  // 配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你
  performance: options.performance || {},
});
