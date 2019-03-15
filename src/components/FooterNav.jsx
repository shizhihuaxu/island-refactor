import React, { Component } from 'react'
import { Layout } from 'antd'
import './footer.less'

const { Footer } = Layout

class FooterNav extends React.Component {
	constructor() {
		super()

		this.state = {
			navList: [{
				link: '/',
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
	}

	render() {
		return (
			<Footer className='footer-nav'>
				<div className='footer-logo'>
					<a href='javascript:void(0)'></a>
				</div>
				<div className='footer-info'>
					<span>
						{this.state.navList.map((nav,index) =>
							<a href={nav.link} target='_blank' key={index}>{nav.text}</a>
				      	)}
						<br/>
					</span>
					<span>All rights reserved </span>
				</div>
			</Footer>
		)
	}
}

export default FooterNav