import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

class ArticleCard extends React.Component {
	render() {
		return (
			<Card  className='article-cpt'>
				<div className='article-info'>
					<div className='article-info-box'>
						<div className='article-title'>
							<Link to=''>加上查询参数</Link>
						</div>
						<div className='article-author'>
							<Link to=''>by/ 张三</Link>
						</div>
						<div className='article-content'>
							内容摘要
							<span className='view-all'>
								<Link to=''>VIEW ALL</Link>
							</span>
						</div>
					</div>
					<div className='article-others'>
						11.0 k次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:33&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:184
					</div>
				</div>
				<div className='article-img'>
					<Link to=''></Link>
				</div>
			</Card>
		)
	}
}

export default ArticleCard