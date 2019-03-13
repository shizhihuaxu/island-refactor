import React, { Component } from 'react'
import { Layout } from 'antd'
import './footer.less'

const { Footer } = Layout

class FooterNav extends React.Component {
	render() {
		return (
			<Footer className='footer-nav'>
				<div className='footer-logo'>
					<a href='javascript:void(0)'></a>
				</div>
				<div className='footer-info'>
					<span>
						<a href='' target="_blank">关于我们</a> 
						<a href='' target="_blank">友情链接</a> 
						<a href='' target="_blank">片刻帮助</a> 
						<a href="" target="_blank">意见反馈</a> 
						<a href='' target="_blank">成长记忆</a>
						<br/>
					</span>
					<span>All rights reserved </span>
				</div>
			</Footer>
		)
	}
}

export default FooterNav