// 用于修改create-react-app默认配置
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        style: true,
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