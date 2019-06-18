import React from 'react'
import ArticleCard from '@/components/article-card'
import { getArticleList } from '@/api/index.js'

class Read extends React.Component {
	state = {
		articleList: []
	}
	componentDidMount() {
		let _self = this 

		getArticleList().then(function(res) {
			if(res.status === 200) {
				_self.setState({ articleList: res.data})
			}
		})
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