import { t } from 'i18next';
import React from 'react';

export default function Home() {
	return (
		<>
			<h3>{t('pages.home.welcome')}</h3>
			<p>{t('pages.home.content')}</p>
		</>
	);
}
