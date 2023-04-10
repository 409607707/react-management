import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from '@views/About'
import Home from '@views/Home'
import App from '../App';
const BaseRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to='home' />} />
					<Route path='home' element={<Home />} />
					<Route path='about' element={<About />} />
          <Route path='*' element={<p>No Matched Route</p>} />
				</Route>
			</Routes>
		</Router>
	)
}

export default BaseRouter
