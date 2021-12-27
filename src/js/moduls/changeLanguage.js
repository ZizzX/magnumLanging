import {locale} from '../locale.js';
import createWinnersSlider from './sliderCreate.js';
import destroySlider from './removeWinnersSlider.js';
import createSliderWithLang from './createSliderWithLang.js';
import changeElementLang from '../helpers/changeElemLang.js';
import addHideClass from '../helpers/addHideClass.js';
import removeHideClass from '../helpers/removeHideClass.js';
import getElemAttribute from '../helpers/getElemAttribute.js';
import createWinnersParentElement from '../helpers/createWinnersParentElement.js';

function changeLanguage({
													curLang,
												}) {
	const lang = document.querySelectorAll('.lang');
	
	lang.forEach(langItem => {
		const attr = getElemAttribute(langItem, 'data-lang');
		if (attr === curLang) {
			addHideClass(langItem);
		} else {
			removeHideClass(langItem);
		}
	});
	
	lang.forEach(langLink => {
		langLink.addEventListener('click', (e) => {
			const target = e.target;
			
			lang.forEach(langItem => removeHideClass(langItem));
			addHideClass(target);
			
			curLang = getElemAttribute(target, 'data-lang');
			localStorage.setItem('lang', curLang);
			
			destroySlider({parent: '.winners', elemForRemove: '.container',});
			destroySlider({parent: '.products', sliderName: '.products__slider'});
			
			setPageLanguage();
		});
	});
	
	function setPageLanguage() {
		const local = locale()[curLang];
		
		changeElementLang({local, curLang});
		
		const {winnerParentElement, container} = createWinnersParentElement();
		
		const	productsSlider = createSliderWithLang();
		
		winnerParentElement.append(container);
		productsSlider.mount();
		
		createWinnersSlider(
				{sliderLocaleObject: local, curLang, container, hasWinners: true});
	}
	
	setPageLanguage();
}

export default changeLanguage;
