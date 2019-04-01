import React from 'react'
import ArticleCard from '@/components/article-card'

class Read extends React.Component {
	state = {
		articleList: [
			{
				article_id: 1,
				title: '文章名',
				user_id: 1,
				author: '张三',
				expert: '内容摘要',
				skip_num: 100,
				comment_num: 40,
				like_num: 50,
			}
		]
	}
	render() {
		let { articleList } = this.state

		return (
			<div className='index-content'>
				{articleList.map((item) => 
					<ArticleCard 
						key={item.article_id}
						articleInfo={item} />
				)}
			</div>
		)
	}
}

export default Read