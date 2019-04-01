/**
 * js 工具函数
 * @author shizhihuaxu 2019-03-29
 * @param  {[Object]} obj [原对象]
 * @return {[Object]} newObj   [目标对象]
 */
export const deepClone = (obj) => {
	let temp = JSON.stringfy(obj)

	return JSON.parse(temp)
}