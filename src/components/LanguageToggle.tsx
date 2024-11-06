import React from 'react';
import i18n from '../i18n';

function LanguageToggle () {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
		i18n.loadLanguages(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('pt')}>pt</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  )
}

export default LanguageToggle;
