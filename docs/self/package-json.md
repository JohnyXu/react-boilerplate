


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

## 修改git config user.name,user.email
github上提交记录里面要显示头像，需要下面的email跟github保持一直才可以
git config --list
git config --global user.name "JohnyXu"
git config --global user.email "ahstuxq@163.com"

## .editorconfig
https://editorconfig.org/
EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs
```js
# editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

## plop
根据一套模版生成固定样式的初始代码框架,参考package.json中例子，比如ButtonTest,fr.json

`plop --plopfile internals/generators/index.js` 指定模版文件
参考 `internals/generators/index.js`
1. description  对应选项的描述
2. prompts  对应给出用户的选择项
3. actions  用户的选择

https://github.com/plopjs/plop
https://github.com/plopjs/node-plop#readme
Consistency Made Simple
Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.

## CoverAll
[![Build Status][ci-image]][ci-url] [![Coverage Status][coveralls-image]][coveralls-url]

Coveralls.io support for Node.js.
Get the great coverage reporting of coveralls.io and
add a cool coverage button (like the one above) to your README.
Supported CI services: Travis CI, CodeShip, CircleCI, Jenkins, Gitlab CI, AppVeyor, Buildkite, GitHub Actions CI

[ci-image]: https://github.com/nickmerwin/node-coveralls/workflows/Tests/badge.svg
[ci-url]: https://github.com/nickmerwin/node-coveralls/actions?workflow=Tests
[coveralls-image]: https://coveralls.io/repos/nickmerwin/node-coveralls/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/nickmerwin/node-coveralls?branch=master

## jest
https://github.com/facebook/jest
Delightful JavaScript Testing.

### jest --coverage
打印测试覆盖率
Indicates that test coverage information should be collected and reported in the output. This option is also aliased by --collectCoverage.

### jest --watchAll
当有文件改变时，跑所有的测试
Watch files for changes and rerun all tests when something changes. If you want to re-run only the tests that depend on the changed files, use the --watch option.

## package.json 可指定task
npm script `"lint:staged": "lint-staged",`
在提交之前执行npm命令：`"pre-commit": "lint:staged",`
resolutions: 允许您覆盖特定嵌套依赖项的版本
参考 lint-staged,对所有的js文件和json分别执行数组内命令
```json
"lint-staged": {
  "*.js": [
    "npm run lint:eslint:fix",
    "git add --force"
  ],
  "*.json": [
    "prettier --write",
    "git add --force"
  ]
}
```

## eslint
`npx eslint --ignore-path .gitignore --ignore-pattern internals/script -- .`
### --ignore-path:Specify path of ignore file 指定忽略的路径
This option allows you to specify the file to use as your .eslintignore
By default, ESLint looks in the current working directory for .eslintignore
You can override this behavior by providing a path to a different file.

### --ignore-pattern
This option allows you to specify patterns of files to ignore
You can repeat the option to provide multiple patterns.
The supported syntax is the same as for .eslintignore files,
which use the same patterns as the .gitignore specification.
You should quote your patterns in order to avoid shell interpretation of glob patterns.

### --fix
Automatically fix problems
This option instructs ESLint to try to fix as many issues as possible.
The fixes are made to the actual files themselves and
only the remaining unfixed issues are output.
Not all problems are fixable using this option,

and the option does not work in these situations:
This option throws an error when code is piped to ESLint.
This option has no effect on code that uses a processor, unless the processor opts into allowing autofixes.
If you want to fix code from stdin or otherwise want to get the fixes without actually writing them to the file, use the --fix-dry-run option.

代码中禁用eslint检查
/* eslint-disable */

代码中开启eslint检查
/* eslint-enable */

eslint注释的下一行 关闭eslint检查 no-unused-expressions这条规则
/* eslint-disable-next-line no-unused-expressions */

## stylelint
规范css的书写，定义了一整套规则
A mighty, modern style linter
A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
understands the latest CSS syntax including custom properties and level 4 selectors
extracts embedded styles from HTML, markdown and CSS-in-JS object & template literals
parses CSS-like syntaxes like SCSS, Sass, Less and SugarSS
has over 170 built-in rules to catch errors, apply limits and enforce stylistic conventions
supports plugins so you can create your own rules or make use of plugins written by the community
automatically fixes some violations (experimental feature)
is well tested with over 15000 unit tests
supports shareable configs that you can extend or create your own of
is unopinionated so you can tailor the linter to your exact needs
has a growing community and is used by Facebook, GitHub and WordPress
https://github.com/stylelint/stylelint


## prettier
`npm run prettify babel.config.js`
格式化babel.config.js代码文件
```javascript
{
  "printWidth": 80,// 一行占用宽度
  "tabWidth": 2,// tab占用的空格数量
  "useTabs": false,// 不是tab
  "semi": true, // 半角输入
  "singleQuote": true, // 单引号
  "trailingComma": "all" // 删除行末空格
}
```

## scripts
npm 下可以运行的脚本文件
执行顺序 prestop, stop, poststop: Run by the npm stop command
先执行pre,xxx,post

## engines
依赖的node版本的npm版本号

## dependencies
生产环境下依赖的npm库

## devDependencies
依赖的npm开发库

## 修复npm run lint报错
ErrorTips: Browserslist: caniuse-lite is outdated. Please run next command `npm update`

`npm update --depth 10 caniuse-lite browserslist`

## 执行数据类型静态检查
```
npm install
npm run lint
```
