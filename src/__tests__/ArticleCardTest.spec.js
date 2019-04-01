import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ArticleCard from '../components/article-card'

configure({ adapter: new Adapter() })

describe('<ArticleCard/>', () => {
	it('render correct', () => {
		const articleInfo = {
			article_id: 1,
			title: '文章名',
			user_id: 1,
			author: '张三',
			expert: '内容摘要',
			skip_num: 100,
			comment_num: 40,
			like_num: 50,
		}
		const wrapper = mount(<Router><ArticleCard articleInfo={articleInfo}/></Router>)
		let title  = wrapper.find('.article-title').text()

		expect(title).toBe('文章名')
	});
});