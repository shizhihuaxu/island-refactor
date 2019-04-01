import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

const { Header:LayoutHeader } = Layout

class Header extends React.Component{
    // 实例属性的新写法 
    state = {
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

    componentWillMount() {
    	// ajax fetch data
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,  
        });
    }

    render() {
        let { current,navList } = this.state
        
        return (
            <LayoutHeader className='header-nav'>
            	<div className='header-logo'>
            		<Link to='/'/>
            	</div>
	            <Menu
				        mode='horizontal'
                        className='header-menu'
                        onClick={this.handleClick}
				        selectedKeys={[current]}
				      >
				    {navList.map((nav) =>
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