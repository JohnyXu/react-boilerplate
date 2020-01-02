
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
