// 用于修改create-react-app默认配置
const path = require('path');
const { 
    override, 
    disableEsLint,
    fixBabelImports, 
    addWebpackAlias, 
    addLessLoader 
} = require('customize-cra');

module.exports = override(
    disableEsLint(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        style: true,
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src'),
    }),
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