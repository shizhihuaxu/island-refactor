import React from 'react'
import MoodCard from '@/components/mood-card'
import avatar from '@/imgs/user/avatar.png'

class Mood extends React.Component {
	state = {
		moodList: [
			{
				mood_id: 1,
				user_id: 2,
				img: avatar,
				content: 'test~',
				nickname: '诗之花绪',
				avatar: avatar,
				isLike: false
			}
		]
	}

	render() {
		let { moodList } = this.state

		return (
			<div>
				{moodList.map((item,key) => 
					<MoodCard 	key={key}
								moodInfo={item}></MoodCard>
				)}
			</div>
		)
	}
}

export default Mood