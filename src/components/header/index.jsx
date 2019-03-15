import React from 'react'
import { Layout, Menu } from 'antd'
import './index.less'

const { Header } = Layout

class HeaderNav extends React.Component{
    constructor() {
    	super()

        this.state = {
            current: 'index',
            navList:[{
                key: 'index',
                name: '首页'
            },{
                key: 'read',
                name: '阅读'
            },{
                key: 'mood',
                name: '碎片'
            }]
        }

	    this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
    	// ajax fetch data
    }

    handleClick = (e) => {
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
				        mode='horizontal'
                        className='header-menu'
                        onClick={this.handleClick}
				        selectedKeys={[this.state.current]}
				      >
				    {this.state.navList.map((nav) =>
				    	<Menu.Item key={nav.key}>
			          	{nav.name}
			        	</Menu.Item>
			      	)}
			    </Menu>
		    </Header>
        );
    }
}

export default HeaderNav