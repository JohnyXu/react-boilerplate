

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
