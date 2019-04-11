import React from 'react'
import './index.less'

interface LikeStateProps {
    isLike: boolean;
    onStateChange: any;
}
class LikeState extends React.Component < LikeStateProps, {} > {
    // 点赞
    like = () => {
        this.props.onStateChange(true)
    }
    // 取消赞
    unlike = () => {
        this.props.onStateChange(false)
    }

    render() {
        const { isLike } = this.props

        if (isLike) {
            return (<div className='like-state liked' onClick={this.unlike}></div>)
        }
        return (<div className='like-state like' onClick={this.like}></div>)
    }
}
export default LikeState