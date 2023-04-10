
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

const App = () => {
	const Outlet = useRoutes(routes)
	return (
		<>
			{ Outlet }
		</>
	)
}

export default App
