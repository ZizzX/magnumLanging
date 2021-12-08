'use strict';
import timer from './moduls/timer';
import changeLanguage from './moduls/changeLanguage.js';

document.addEventListener('DOMContentLoaded', () => {
	let curLang = localStorage.getItem('lang') ?? 'ru';
	localStorage.setItem('lang', curLang);
	
	changeLanguage({
									 curLang,
								 });
	timer();
});

