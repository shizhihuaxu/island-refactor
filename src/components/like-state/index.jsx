import React from 'react'
import './index.less'

class LikeState extends React.Component {
	// 点赞
	like = () => {
		
	}
	// 取消赞
	unlike = () => {
		
	}

	render() {
		const { isLike } = this.props

		if(isLike) {
			return (<div className='like-state liked' onClick={this.unlike}></div>)
		}
		return (<div className='like-state like' onClick={this.like}></div>)
	}
}
export default LikeState