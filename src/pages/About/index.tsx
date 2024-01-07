import { t } from 'i18next';
import React from 'react';

export default function About() {
	return (
		<>
			<h3>{t('pages.about.welcome')}</h3>
			<p>{t('pages.about.content')}</p>
		</>
	);
}
