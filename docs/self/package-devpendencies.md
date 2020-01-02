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
  "@babel/core": "7.4.3",
  "@babel/plugin-proposal-class-properties": "7.4.0",
  "@babel/plugin-syntax-dynamic-import": "7.2.0",
  "@babel/plugin-transform-modules-commonjs": "7.4.3",
  "@babel/plugin-transform-react-constant-elements": "7.2.0",
  "@babel/plugin-transform-react-inline-elements": "7.2.0",
  "@babel/preset-env": "7.4.3", // babel的预设规则
  "@babel/preset-react": "7.0.0", // react的预设规则

  "@babel/register": "7.4.0",
  "add-asset-html-webpack-plugin": "3.1.3",
  "babel-core": "7.0.0-bridge.0",
  "babel-eslint": "10.0.1",
  "babel-loader": "8.0.5",
  "babel-plugin-dynamic-import-node": "2.2.0",
  "babel-plugin-lodash": "3.3.4",
  "babel-plugin-react-intl": "3.0.1",
  "babel-plugin-styled-components": "1.10.0",
  "babel-plugin-transform-react-remove-prop-types": "0.4.24",

  "circular-dependency-plugin": "5.0.2",
  "compare-versions": "3.4.0",
  "compression-webpack-plugin": "2.0.0",
  "coveralls": "3.0.3",
  "css-loader": "2.1.1",

  "eslint": "5.16.0",
  "eslint-config-airbnb": "17.1.0",
  "eslint-config-airbnb-base": "13.1.0",
  "eslint-config-prettier": "4.1.0",
  "eslint-import-resolver-webpack": "0.11.1",
  "eslint-plugin-import": "2.17.2",
  "eslint-plugin-jsx-a11y": "6.2.1",
  "eslint-plugin-prettier": "3.0.1",
  "eslint-plugin-react": "7.12.4",
  "eslint-plugin-redux-saga": "1.0.0",
  "eslint-plugin-react-hooks": "1.6.0",

  "file-loader": "3.0.1",
  "html-loader": "0.5.5",
  "html-webpack-plugin": "3.2.0",
  "image-webpack-loader": "4.6.0",
  "imports-loader": "0.8.0",

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