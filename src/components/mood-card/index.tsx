import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Avatar } from 'antd'
import LikeState from '../like-state'
import './index.less'

const { Meta } = Card

interface MoodCardProps {
    moodInfo: {
        img: '',
        content: '',
        user_id: '',
        avatar: '',
        nickname: '',
        isLike: false,
    }
}

class MoodCard extends React.Component < MoodCardProps, {} > {
        // 更新点赞状态
        updateLikeState = (status: boolean) => {
            // ajax update state
            console.log(status)
        }

        render() {
            const { moodInfo } = this.props

            return (
                    <Card
				className='mood-card'
				hoverable={true}
			    style={{ width: 285}}
			    bodyStyle={{ padding: 0}}
			    cover={<img alt='' src={moodInfo.img}/>
                } >
                <Meta 
			    	description={
			    		<React.Fragment>
			    			<div className='mood-content'>{moodInfo.content}</div>
			    			<div className='user-info'>
								<Link to={`/user/:${moodInfo.user_id}`}>
									<Avatar src={moodInfo.avatar}/>
									<span className='nickname'>{moodInfo.nickname}</span>
								</Link>
								<LikeState  isLike={moodInfo.isLike}
											onStateChange={this.updateLikeState}></LikeState>
							</div>
			    		</React.Fragment>
			    	}/>
			</Card>
		)
	} 
}

export default MoodCard