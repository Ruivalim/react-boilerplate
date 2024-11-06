import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import { withTranslation } from 'react-i18next';

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
		<RouterProvider router={router} />
	);
};

export default withTranslation()(App);
