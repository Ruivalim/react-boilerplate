import React from 'react';
import LanguageToggle from '../components/LanguageToggle';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

function Home() {
	return (
		<>
			<h3>{t('pages.home.welcome')}</h3>
			<p>{t('pages.home.content')}</p>
			<LanguageToggle />
		</>
	);
}

export default withTranslation()(Home);
