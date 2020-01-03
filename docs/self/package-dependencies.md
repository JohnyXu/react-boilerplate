## dependencies
```json
"dependencies": {
  "express": "4.16.4",
  "lodash": "4.17.11",
  "prop-types": "15.7.2",
  "react": "16.8.6",
  "react-dom": "16.8.6",
  "redux": "4.0.1",
  "react-redux": "7.0.2",
  "redux-saga": "1.0.2",
  "react-router-dom": "5.0.0",
  "styled-components": "4.2.0",

  "@babel/polyfill": "7.4.3", // 解析es6中的新语法，充当语法转换器
  "chalk": "2.4.2", // 日志输出，彩色显示
  "compression": "1.7.4", // Node.js compression middleware 压缩中间件
  "connected-react-router": "6.4.0", // A Redux binding for React Router v4
  "cross-env": "5.2.0", // 跨平台的环境变量设置
  "fontfaceobserver": "2.1.0", // Webfont loading. Simple, small, and efficient.
  "history": "4.9.0", // Manage session history with JavaScript
  "hoist-non-react-statics": "3.3.0", // Copies non-react specific statics
  "immer": "3.0.0", // Create the next immutable state by mutating the current one
  "intl": "1.2.5", // Compatibility implementation of the ECMAScript Internationalization API (ECMA-402) for JavaScript
  "invariant": "2.2.4",// 类似于断言，来抛出错误
  "ip": "1.1.5", // IP address tools for node.js
  "minimist": "1.2.0",// 获取命令行的参数列表
  "react-helmet": "6.0.0-beta",// html中head部分动态处理器
  "react-intl": "2.8.0", // 国际化处理，格式化日期，数字等
  "reselect": "4.0.0", // Selector library for Redux
  "sanitize.css": "8.0.0",//提供一致的，跨浏览器的默认样式，类似于normalize.css
},
```
```json
"devDependencies": {
  "@babel/cli": "7.4.3",//babel的命令行接口
  "@babel/core": "7.4.3",//babel转换器
  "@babel/plugin-proposal-class-properties": "7.4.0",// 支持类的生命语法
  "@babel/plugin-syntax-dynamic-import": "7.2.0",// 支持import语法
  "@babel/plugin-transform-modules-commonjs": "7.4.3",//转换成commonjs格式
  "@babel/plugin-transform-react-constant-elements": "7.2.0",//提升react常量作用域范围来提高协调速度
  "@babel/plugin-transform-react-inline-elements": "7.2.0",// 转换jsx代码
  "@babel/preset-env": "7.4.3", // babel的预设规则
  "@babel/preset-react": "7.0.0", // react的预设规则

  "@babel/register": "7.4.0",// 注册babel转码，后续require会自动转换
  "add-asset-html-webpack-plugin": "3.1.3",//把JavaScript和css导入到html中
  "babel-core": "7.0.0-bridge.0",// babel转换器 @babel/core的低版本
  "babel-eslint": "10.0.1",// 支持es6代码的静态检查
  "babel-loader": "8.0.5", // webpack打包时转换JavaScript代码
  "babel-plugin-dynamic-import-node": "2.2.0",// import导入的低版本
  "babel-plugin-lodash": "3.3.4",// 一个简单的转换来提取lodash模块
  "babel-plugin-react-intl": "3.0.1",// React Intl提取字符串消息用来翻译
  "babel-plugin-styled-components": "1.10.0",// styled-components的支持
  "babel-plugin-transform-react-remove-prop-types": "0.4.24",// 在生产环境中移除prop-types代码

  "circular-dependency-plugin": "5.0.2",//webpack打包时检测是否有依赖环
  "compare-versions": "3.4.0",//比对版本号
  "compression-webpack-plugin": "2.0.0",// 准备资源的压缩版本
  "coveralls": "3.0.3",// Takes json-cov output into stdin and POSTs to coveralls.io
  "css-loader": "2.1.1",// 解释@import和url关键字

  "eslint": "5.16.0",// 检测和报告JavaScript语法错误
  "eslint-config-airbnb": "17.1.0", // airbnb的eslint配置，包括react
  "eslint-config-airbnb-base": "13.1.0",// airbnb的JavaScript的eslint配置
  "eslint-config-prettier": "4.1.0",// 关闭掉与prettier冲突的规则
  "eslint-import-resolver-webpack": "0.11.1",
  "eslint-plugin-import": "2.17.2",// 支持es6的import,export语法检测
  "eslint-plugin-jsx-a11y": "6.2.1",// 针对a11y jsx版本的语法检测
  "eslint-plugin-prettier": "3.0.1",// 将prettier作为eslint规则运行
  "eslint-plugin-react": "7.12.4",// react特定的eslint规则
  "eslint-plugin-redux-saga": "1.0.0",// redux-saga 规则
  "eslint-plugin-react-hooks": "1.6.0", // react-hooks 规则

  "file-loader": "3.0.1",//将import/require的文件导到url或者放到输出目录
  "html-loader": "0.5.5", // 把html作为字符串导出
  "html-webpack-plugin": "3.2.0", // 简化服务bundle的html创建
  "image-webpack-loader": "4.6.0",// imagemin 来压缩png,jpg,svg
  "imports-loader": "0.8.0",// 允许使用作为全局变量的模块

  "jest-cli": "24.7.1",
  "jest-dom": "3.1.3",
  "jest-styled-components": "6.3.1",

  "lint-staged": "8.1.5",
  "ngrok": "3.1.1",
  "node-plop": "0.18.0",
  "null-loader": "0.1.1",
  "offline-plugin": "5.0.6",
  "plop": "2.3.0",

  "pre-commit": "1.2.2",
  "prettier": "1.17.0",

  "react-app-polyfill": "0.2.2",
  "react-test-renderer": "16.8.6",
  "react-testing-library": "6.1.2",

  "rimraf": "2.6.3",
  "shelljs": "0.8.3",

  "style-loader": "0.23.1",
  "stylelint": "10.0.1",
  "stylelint-config-recommended": "2.2.0",
  "stylelint-config-styled-components": "0.1.1",
  "stylelint-processor-styled-components": "1.6.0",
  "svg-url-loader": "2.3.2",
  "terser-webpack-plugin": "1.2.3",
  "url-loader": "1.1.2",

  "webpack": "4.30.0",
  "webpack-cli": "3.3.0",
  "webpack-dev-middleware": "3.6.2",
  "webpack-hot-middleware": "2.24.3",
  "webpack-pwa-manifest": "4.0.0",
  "whatwg-fetch": "3.0.0"
}
```


## compare-versions
https://github.com/omichelsen/compare-versions#readme
Compare semver version strings to find which is greater, equal or lesser.

```js
var compareVersions = require('compare-versions');
compareVersions('10.1.8', '10.0.4'); //  1
compareVersions('10.0.1', '10.0.1'); //  0
compareVersions('10.1.1', '10.2.2'); // -1
```

## babel-loader
在打包的时候用它来转换JavaScript代码
Babel loader for webpack
This package allows transpiling JavaScript files using Babel and webpack.
https://github.com/babel/babel-loader


## babel-eslint
eslint做检查时可以检查较新的es6语法
https://github.com/babel/babel-eslint
A wrapper for Babel's parser used for ESLint
babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.


## add-asset-html-webpack-plugin
Add a JavaScript or CSS asset to the HTML generated by html-webpack-plugin

## babel-polyfill es6语法的api的垫片
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，
比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码
在脚本头部，加入如下一行代码。
```js
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```
浏览器环境垫片 https://github.com/babel/babel-standalone
https://unpkg.com/@babel/standalone@7.7.7/babel.min.js
type="text/babel"

## babel-cli 命令行转码工具
babel入门教程 https://www.kancloud.cn/digest/babel/217104
babel-node： 提供一个支持ES6的REPL环境，它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。可以直接执行es语法写的js文件

## @babel/register
https://www.kancloud.cn/digest/babel/217107
babel-register 模块改写 require 命令，为它加上一个钩子。
此后，每当使用 require 加载.js、.jsx、.es 和.es6 后缀名的文件，就会先用 Babel 进行转码。
babel-register 只会对 require 命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。

## @babel/core
对代码进行转码
Babel is a compiler for writing next generation JavaScript.
https://github.com/babel/babel
All transformations will use your local configuration files.
```js
var babel = require("@babel/core");
import { transform } from "@babel/core";
import * as babel from "@babel/core";
babel.transform("code();", options, function(err, result) {
  result.code;
  result.map;
  result.ast;
});
```

## import 'sanitize.css/sanitize.css';
A best-practices CSS foundation https://csstools.github.io/sanitize.css
sanitize.css is a CSS library that provides
consistent, cross-browser default styling of HTML elements alongside useful defaults.
It is developed alongside normalize.css, which means
every normalization is included,
and every normalization and opinion are clearly marked and documented.

## reselect
Selector library for Redux
https://github.com/reduxjs/reselect#readme
计算派生数据，高效率，可组合的
Selectors can compute derived data, allowing Redux to store the minimal possible state.
Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
Selectors are composable. They can be used as input to other selectors.

### createSelector(...inputSelectors | [inputSelectors], resultFunc)
Takes one or more selectors, or an array of selectors,
computes their values and passes them as arguments to resultFunc.
```js
import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.items
const taxPercentSelector = state => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)
const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)
export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}
console.log(subtotalSelector(exampleState)) // 2.15
console.log(taxSelector(exampleState))      // 0.172
console.log(totalSelector(exampleState))    // { total: 2.322 }
```

## react-intl
https://github.com/formatjs/react-intl
Internationalize React apps.
This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.
React Intl is part of FormatJS.
It provides bindings to React via its components and API.

## minimist
parse argument options
https://github.com/substack/minimist
```js
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
$ node example/parse.js -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```


## node-ip
IP address tools for node.js
https://github.com/indutny/node-ip
```js
var ip = require('ip');
ip.address() // my ip address
ip.isEqual('::1', '::0:1'); // true
ip.toBuffer('127.0.0.1') // Buffer([127, 0, 0, 1])
ip.toString(new Buffer([127, 0, 0, 1])) // 127.0.0.1
ip.fromPrefixLen(24) // 255.255.255.0
ip.mask('192.168.1.134', '255.255.255.0') // 192.168.1.0
ip.cidr('192.168.1.134/26') // 192.168.1.128
ip.not('255.255.255.0') // 0.0.0.255
ip.or('192.168.1.134', '0.0.0.255') // 192.168.1.255
ip.isPrivate('127.0.0.1') // true
ip.isV4Format('127.0.0.1'); // true
ip.isV6Format('::ffff:127.0.0.1'); // true
```

## invariant
https://github.com/zertosh/invariant
A mirror of Facebook's invariant (e.g. React, flux).
A way to provide descriptive errors in development
but generic errors in production.
Note: When process.env.NODE_ENV is not production, the message is required.
If omitted, invariant will throw regardless of the truthiness of the condition. When process.env.NODE_ENV is production, the message is optional – so they can be minified away.
```javascript
var invariant = require('invariant');

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

## produce(currentState, producer: (draftState) => void): nextState
Create the next immutable state by mutating the current one
https://immerjs.github.io/immer/
The Immer package exposes a default function that does all the work.
https://github.com/immerjs/immer/blob/master/docs/produce.md

## hoist-non-react-statics
```javascript
import hoistNonReactStatics from 'hoist-non-react-statics';
hoistNonReactStatics(targetComponent, sourceComponent);
```
If you have specific statics that you don't want to be hoisted,
you can also pass a third parameter to exclude them:
```javascript
hoistNonReactStatics(targetComponent, sourceComponent, { myStatic: true, myOtherStatic: true });
```
Copies non-react specific statics from a child component to a parent component. Similar to Object.assign, but with React static keywords blacklisted from being overridden.
https://github.com/mridgway/hoist-non-react-statics#readme

## history
Manage session history with JavaScript
https://github.com/ReactTraining/history

## import FontFaceObserver from 'fontfaceobserver';
Webfont loading. Simple, small, and efficient.
https://github.com/bramstein/fontfaceobserver

## cross-env
只需要一个简单的命令，不用担心设置（windows，linux），对外保持统一的命令行接口
Most Windows command prompts will choke when you set environment variables with NODE_ENV=production like that. (The exception is Bash on Windows, which uses native Bash.) Similarly, there's a difference in how windows and POSIX commands utilize environment variables. With POSIX, you use: $ENV_VAR and on windows you use %ENV_VAR%.
cross-env makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.

Cross platform setting of environment scripts
https://www.npmjs.com/package/cross-env

## import { ConnectedRouter } from 'connected-react-router';
A Redux binding for React Router v4,绑定Redux的router
https://github.com/supasate/connected-react-router#readme

## compression
Node.js compression middleware.
The following compression codings are supported:
deflate,gzip
```js
var compression = require('compression')
var express = require('express')

var app = express()
app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
```