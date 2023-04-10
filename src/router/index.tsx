import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Home from '@views/Home'
// import About from '@views/About';
// import User from '@views/User';
const About = lazy(() => import('@views/About'))
const User = lazy(() => import('@views/User'))
const withLoading = (component: JSX.Element) => (
	<Suspense fallback={<></>}>{component}</Suspense>
)
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/about' />
	},
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'about',
				element: withLoading(<About />),
			},
			{
				path: 'user',
				element: withLoading(<User />),
			},
			{
				path: '*',
				element: <>Not Found Component</>,
			}
		],
	},
]

export default routes
