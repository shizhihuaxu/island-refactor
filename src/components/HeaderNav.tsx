import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './header.less'

const { Header } = Layout
const { SubMenu, ItemGroup } = Menu

class HeaderNav extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e: any) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Header className='header-nav'>
            	<div className='header-logo'>
            		<a href='javascript:void(0)'></a>
            	</div>
	            <Menu
				        onClick={this.handleClick}
				        selectedKeys={[this.state.current]}
				        mode='horizontal'
				        className='header-menu'
				      >
				    {/*这里如何使用循环生成*/}
			        <Menu.Item key='index'>
			          	首页
			        </Menu.Item>
			        <Menu.Item key='read'>
			          	阅读
			        </Menu.Item>
			        <Menu.Item key='mood'>
			          	碎片
			        </Menu.Item>
			    </Menu>
		    </Header>
        );
    }
}

export default HeaderNav