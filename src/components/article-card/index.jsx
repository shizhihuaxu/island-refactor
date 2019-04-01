import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

class ArticleCard extends React.Component {
	render() {
		const { articleInfo } = this.props

		return (
			<Card  className='article-cpt'>
				<div className='article-info'>
					<div className='article-info-box'>
						<div className='article-title'>
							<Link to={`/articleDetail/${articleInfo.article_id}`}>{articleInfo.title}</Link>
						</div>
						<div className='article-author'>
							<Link to={`/user/${articleInfo.user_id}`}>by/ {articleInfo.author}</Link>
						</div>
						<div className='article-content'>
							{articleInfo.expert}
							<span className='view-all'>
								<Link to={`/articleDetail/${articleInfo.article_id}`}>VIEW ALL</Link>
							</span>
						</div>
					</div>
					<div className='article-others'>
						{articleInfo.skip_num}次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:{articleInfo.comment_num}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{articleInfo.like_num}
					</div>
				</div>
				<div className='article-img'>
					<Link to={`/articleDetail/${articleInfo.article_id}`}></Link>
				</div>
			</Card>
		)
	}
}

export default ArticleCard