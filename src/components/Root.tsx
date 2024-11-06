import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function Root() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default withTranslation()(Root);
