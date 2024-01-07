import React from 'react';
import './styles/Common.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
};

export default App;
