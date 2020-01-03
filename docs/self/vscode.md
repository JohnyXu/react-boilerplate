




## babel的预设规则集
```js
presets: [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
  '@babel/preset-react',
]
```
## prettierrc 格式化代码规则
```js
{
  "printWidth": 80,
  "tabWidth": 2,tab占用2个宽度
  "useTabs": false,不允许使用tab
  "semi": true, 半角符号
  "singleQuote": true,单引号
  "trailingComma": "all" 尽可能在结尾加上逗号
}
```
## editorconfig.org 编辑器格式规则，需要安装editorconfig插件

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