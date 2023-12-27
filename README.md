# 使用

项目的开发环境搭建

## 装包

执行 `npm install`

## 下载编辑器扩展（使用 vscode 开发）

### 步骤

1. 点开扩展
2. 点击筛选器
3. 选择推荐
4. 左上角点击全部安装

### 扩展介绍

- Stylelint

格式化 css、less，具体配置查看 `.stylelintrc.json` 文件, 全部规则 [stylelint](https://stylelint.io/user-guide/rules)

- EditorConfig for VS Code

统一编辑器配置，具体配置查看 `.editorconfig` 文件

- ESLint

校验代码，统一代码风格，具体配置查看 `.eslintrc.cjs` 文件

- Prettier - Code formatter

格式化代码，本项目采用的是 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) 的 [prettierrc](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/.prettierrc.js) 配置

- Code Spell Checker

检查代码单词是否拼写正确，有助于提高代码质量与可阅读性

## 编辑器配置

1. 打开设置
2. 搜索 codeActionsOnSave ，点击在 settings.json 编辑
3. 添加如下代码

```JSON
"editor.codeActionsOnSave": {
  "source.fixAll": true,
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
},
```

# 技术架构

vite5 + react18 + typescript5 + zustand

- [vite](https://cn.vitejs.dev/)
- [react](https://react.docschina.org/reference/react/hooks)
- [typescript](https://wangdoc.com/typescript/intro)
- [zustand](https://awesomedevin.github.io/zustand-vue/docs/introduce/what-is-zustand)
