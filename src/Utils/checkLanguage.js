export default function() {
	const userLang = window.navigator.language || window.navigator.userLanguage;

	if(userLang && (userLang === 'pt-BR' || userLang === 'pt-PT')) return false;

	return true;
}
