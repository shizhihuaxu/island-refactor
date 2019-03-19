/**
 *  @author xinhong@bolean 2018/10/29
 *  @desc 生成 API 接口
 */
import $axios from './axios'
import STATIC from '@/utils/constant'

/**
 * @method getArticleList
 * @desc 获取文章列表
 * @returns {Promise} 响应结果
 */
const getArticleList = () => {
	return $axios({
		url: STATIC.API.ARTICLE_LIST,
		method: 'GET',
	})
}

/**
 * @method getMoodList
 * @desc 获取碎片列表
 * @returns {Promise} 响应结果
 */
const getMoodList = () => {
	return $axios({
		url: STATIC.API.MOOD_LIST,
		method: 'GET'
	})
}

export default {
	getArticleList,
	getMoodList
}