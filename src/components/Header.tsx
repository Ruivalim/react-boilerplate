import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<>
			<h1>React Boilerplate</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">{t('menu.home')}</Link>
					</li>
					<li>
						<Link to="/about">{t('menu.about')}</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
