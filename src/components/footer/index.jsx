import React from 'react'
import { Layout } from 'antd'
import './index.less'

const { Footer:LayoutFooter } = Layout

class Footer extends React.Component {
	state = {
		navList: [{
			link: '/about',
			text: '关于我们'
		},{
			link: '/',
			text: '友情链接'
		},
		{
			link: '/',
			text: '意见反馈'
		}]
	}

	render() {
		return (
			<LayoutFooter className='footer-nav'>
				<div className='footer-logo'>
					<a href='javascript:void(0)'></a>
				</div>
				<div className='footer-info'>
					<span>
						{this.state.navList.map((nav,index) =>
							<a 	href={nav.link} 
								key={index}
								target='_blank' 
								rel='noopener noreferrer'>{nav.text}</a>
				      	)}
						<br/>
					</span>
					<span>All rights reserved </span>
				</div>
			</LayoutFooter>
		)
	}
}

export default Footer