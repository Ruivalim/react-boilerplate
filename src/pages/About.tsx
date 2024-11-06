import { t } from 'i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';

function About() {
	return (
		<>
			<h3>{t('pages.about.welcome')}</h3>
			<p>{t('pages.about.content')}</p>
		</>
	);
}

export default withTranslation()(About);
