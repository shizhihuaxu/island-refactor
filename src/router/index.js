import Home from '@/pages/home'
import Read from '@/pages/read'
import Mood from '@/pages/mood'
import ArticleDetail from '@/pages/read/detail'
import MoodDetail from '@/pages/mood/detail'

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/index',
		exact: true,
		component: Home,
	},
	{
		path: '/read',
		component: Read,
	},
	{
		path: '/mood',
		component: Mood,
	},
	{
		path: '/articleDetail/:id',
		component: ArticleDetail,
	},
	{
		path: '/moodDetail/:id',
		component: MoodDetail,
	},
]

export default routes