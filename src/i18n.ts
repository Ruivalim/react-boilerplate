import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en.json';
import translationPT from '../public/locales/pt.json';

i18n
	.use(detector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: translationEN,
			},
			pt: {
				translation: translationPT,
			},
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
