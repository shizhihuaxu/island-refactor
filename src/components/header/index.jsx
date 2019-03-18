import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

const { Header:LayoutHeader } = Layout

class Header extends React.Component{
    constructor() {
    	super()

        this.state = {
            current: 'index',
            navList:[{
                key: 'index',
                link: '/',
                name: '首页'
            },{
                key: 'read',
                link: '/read',
                name: '阅读'
            },{
                key: 'mood',
                link: '/mood',
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
            <LayoutHeader className='header-nav'>
            	<div className='header-logo'>
            		<Link to='/'/>
            	</div>
	            <Menu
				        mode='horizontal'
                        className='header-menu'
                        onClick={this.handleClick}
				        selectedKeys={[this.state.current]}
				      >
				    {this.state.navList.map((nav) =>
				    	<Menu.Item key={nav.key}>
                            <Link to={nav.link}>
			          	      {nav.name}
                            </Link>
			        	</Menu.Item>
			      	)}
			    </Menu>
		    </LayoutHeader>
        );
    }
}

export default Header