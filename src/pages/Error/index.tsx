import React from 'react';
import { useRouteError } from 'react-router-dom';
import { error_page } from './styles.module.scss';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<section className={error_page}>
			<div>
				<h1>Oops!</h1>
				<h2>Sorry, an unexpected error has occurred.</h2>
				<h2>
					<i>{error.statusText || error.message}</i>
				</h2>
				<Link to="/">
					<button>Home</button>
				</Link>
			</div>
		</section>
	);
}
