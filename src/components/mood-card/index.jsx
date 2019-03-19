import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Avatar } from 'antd'
import LikeState from '@/components/like-state'
import './index.less'

const { Meta } = Card

class MoodCard extends React.Component {
	render() {
		const { moodInfo } = this.props

		return (
			<Card
				className='mood-card'
				hoverable='true'
			    style={{ width: 285}}
			    bodyStyle={{ padding: 0}}
			    cover={<img alt='' src={moodInfo.img}/>}
			>
			    <Meta 
			    	description={
			    		<div>
			    			<div className='mood-content'>{moodInfo.content}</div>
			    			<div className='user-info'>
								<Link to={`/user/:${moodInfo.user_id}`}>
									<Avatar src={moodInfo.avatar}/>
									<span className='nickname'>{moodInfo.nickname}</span>
								</Link>
								<LikeState isLike={moodInfo.isLike}></LikeState>
							</div>
			    		</div> 
			    	}/>
			</Card>
		)
	} 
}

export default MoodCard