## 技术选型

计划使用 Node.js + React + TypeScript 重构仿片刻网的项目

## 目的

本项目的是练习使用React + TypeScript 开发项目，并使用 commitizen 工具规范 commit message

## 核心流程

1. 使用creat-react-app 初始化项目

2. 使用commit message 规范化插件

   ```bash
   cnpm install -D commitizen conventional-changelog conventional-changelog-cli
   ```

   在项目中执行

   ```bash
   commitizen init cz-conventional-changelog --save --save-exact
   ```

   在提交commit时使用git cz命令代替git commit

3. 在 create-react-app 中不使用eject的方法重载webpack配置

   ```bash
   cnpm install -D react-app-rewired customize-cra
   ```

   并修改 package.json 中的scripts，将 react-scripts 替换为 react-app-rewired

   在项目根目录下添加 config.override.js文件

   ```javascript
   const path = require('path');
   const { 
    	override, 
       disableEsLint,
       fixBabelImports, 
       addWebpackAlias, 
       addLessLoader 
   } = require('customize-cra');
   
   module.exports = override(
       // 不使用 eslint 检查
       disableEsLint(),
       fixBabelImports('import', {
           libraryName: 'antd',
           libraryDirectory: 'es',
           style: 'css',
           style: true,
       }),
       // 配置路径别名
       addWebpackAlias({
           ['@']: path.resolve(__dirname, 'src'),
       }),
    	// 重载 ant-design 的全局变量   
       addLessLoader({
           javascriptEnabled: true,
           modifyVars: {
               '@primary-color': '#57ad68',
               '@layout-header-background': 'rgba(255,255,255,0.95)',
               '@layout-header-height': '90px',
               '@layout-footer-background': '#1a1818',
           },
       }),
   );
   ```

4. 使用 react-router4 

   ```bash
   cnpm install react-router-dom
   ```

## 过程中遇到的问题

1. 在React 与 TypeScript的结合过程中遇到一些问题，TypeScript 的类和泛型在React中该定义为什么样的类型模糊不清

