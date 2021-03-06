

## @babel/core transform
转换代码，可参考`scripts/extract-intl.js`
All transformations will use your local configuration files.
Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST
```javascript
babel.transform(code, options, function(err, result) {
  result; // => { code, map, ast }
});
```

## rimraf
A `rm -rf` util for nodejs ,不给提示强制删除
https://github.com/isaacs/rimraf#readme

## child_process.exec(command[, options][, callback])
Spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the exec function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly:

https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback

## lodash.get
_.get(object, path, [defaultValue])
Gets the value at path of object.
If the resolved value is undefined, the defaultValue is returned in its place.
```javascript
var object = { 'a': [{ 'b': { 'c': 3 } }] };

_.get(object, 'a[0].b.c');
// => 3

_.get(object, ['a', '0', 'b', 'c']);
// => 3

_.get(object, 'a.b.c', 'default');
// => 'default'
```

## node-glob
glob 最早是出现在类 Unix 系统的命令行中，是用来匹配文件路径的。
比如，lib/**/*.js 匹配 lib 目录下所有的 js 文件
除了在命令行中，我们在程序中也会有匹配文件路径的需求
glob functionality for node.js
Match files using the patterns the shell uses, like stars and stuff.
This is a glob implementation in JavaScript. It uses the minimatch library to do its matching.
https://github.com/isaacs/node-glob
glob(pattern, [options], cb)

## readline
https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time. It can be accessed using:

命令行交互动画 scripts/helper/progress.js,等待的...动画
api： readline.cursorTo

## shelljs
Nodejs 版本的shell命令行工具

test(expression)
'-b', 'path': true if path is a block device
'-c', 'path': true if path is a character device
'-d', 'path': true if path is a directory
'-e', 'path': true if path exists
'-f', 'path': true if path is a regular file
'-L', 'path': true if path is a symbolic link
'-p', 'path': true if path is a pipe (FIFO)
'-S', 'path': true if path is a socket

ShellJS is a portable (Windows/Linux/macOS) implementation of Unix shell commands on top of the Node.js API. You can use it to eliminate your shell script's dependency on Unix while still keeping its familiar and powerful commands. You can also install it globally so you can run it from outside Node projects - say goodbye to those gnarly Bash scripts
https://github.com/shelljs/shelljs
Portable Unix shell commands for Node.js

执行给定的命令，然后异步回调callback Receives code and output asynchronously.
shelljs.exec(command: string, callback: ExecCallback): child.ChildProcess;

## webpack rule常用项目处理
js,css,font,svg,png,jpg,html,mp4等的常用配置和对应的html
1. babel-loader 语法转换
2. style-loader,css-loader,postcss-loader,sass-loader 添加css，css的js处理
3. url-loader,file-loader
4. svg-url-loader
5. url-loader,image-webpack-loader url的base64处理，图片压缩处理
6. html-loader

分析webpack，可参考 `npm run analyze`,生成stats.json
上传到 http://webpack.github.io/analyse/ 分析用法
webpack --profile 选项捕获编译时每个步骤的时间信息，并且将这些信息包含在输出中
webpack --json > stats.json 以 JSON 格式输出 webpack 的运行结果
webpack --color, --colors 强制在控制台开启颜色 [默认：仅对 TTY 输出启用]
webpack -p 后面命令的简写
--optimize-minimize --define process.env.NODE_ENV="production"
process.stdout.write 控制台输出
webpack --progress 打印出编译进度的百分比值
webpack --hide-modules 隐藏关于模块的信息
webpack --display-optimization-bailout
优化绑定失败的调试,加上参数 --display-optimization-bailout 将显示绑定失败的原因
作用域提升回退触发器 (Scope hoisting fallback trigger)（从 webpack 3.0.0 开始）

### webpack 打包进度过程
10% building 2/2 modules 1 active ...node_modules/react-app-polyfill/ie11.js
69% building 618/627 modules 9 active ...node_modules/webpack/buildin/module.js
70 chunk graph
72 basic dependencies optimization
74 advanced chunk optimization SplitChunksPlugin
79 chunk modules optimization ModuleConcatenationPlugin
84 module id optimization
85 hasing
90 chunk assets processing
92 chunk asset optimization TerserPlugin
95 emitting HtmlWebpackPlugin
95 emitting OfflinePlugin
95 emitting CompressionPlugin
95 emitting webpack-pwa-manifest

## circular-dependency-plugin
Detect circular dependencies in modules compiled with Webpack
用webpack编译模块检测环依赖

## 设定nvm中node的默认版本
`nvm alias default 8.15.1`
`nvm ls`
`nvm use 8.15.1`

KeystoneJS
ElementalUI

## connected-react-router
A Redux binding for React Router v4
https://github.com/supasate/connected-react-router#readme
connectRouter
```javascript
// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
```


## The repository for high quality TypeScript type definitions.
https://github.com/DefinitelyTyped/DefinitelyTyped#readme

## _.conformsTo(object, source)
Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object
https://lodash.com/docs/#conformsTo
```javascript
var object = { 'a': 1, 'b': 2 };

_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true

_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```