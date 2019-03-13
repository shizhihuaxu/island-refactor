import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import App from './App'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.register()