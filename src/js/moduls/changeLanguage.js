import {locale} from '../locale.js';
import {productSettings} from '../constants/sliderSettings.js';
import slider from './slider.js';

function changeLanguage({sliderName, sliderFn, sliderClassName, curLang}) {
	const lang = document.querySelectorAll('.lang');
	localStorage.setItem('lang', curLang);
	
	const headerTitle = document.querySelector('.header__title'),
			headerText = document.querySelector('.header__text'),
			promotionTitle = document.querySelector('.promotion__title'),
			promotionSubtitle = document.querySelector('.promotion__subtitle'),
			promotionText = document.querySelector('.promotion__gradient-text'),
			promotionRulesTitle = document.querySelector('.promotion-rules__title'),
			promotionRulesText = document.querySelectorAll('.promotion-rules__text'),
			promotionRulesDescr = document.querySelectorAll(
					'.promotion-rules__descr'),
			promotionRulesBtn = document.querySelector('.promotion-rules__btn'),
			productsTitle = document.querySelector('.products__title'),
			productsBtn = document.querySelector('.products__btn'),
			winnersTitle = document.querySelector('.winners__title'),
			winnersDescr = document.querySelector('.winners__descr'),
			generalPartnersTitle = document.querySelector('.general-partners__title'),
			partnersTitle = document.querySelector('.partners__title'),
			copyright = document.querySelector('.copyright .text'),
			answer = document.querySelector('.answer'),
			downloadText = document.querySelector('.download-text'),
			helpDesk = document.querySelector('.help-desk p'),
			promotionMillionLogo = document.querySelector('.promotion__million-logo');
	
	const {ru, kz} = locale();
	
	lang.forEach(langLink => {
		langLink.addEventListener('click', (e) => {
			console.log(curLang, 'curLang');
			
			const target = e.target;
			lang.forEach(langItem => langItem.classList.remove('hide'));
			target.classList.add('hide');
			curLang = target.getAttribute('data-lang');
			localStorage.setItem('lang', curLang);
			setPageLanguage();
		});
	});
	
	function setPageLanguage() {
		const local = locale()[curLang];
		
		sliderName.destroy();
		sliderName = slider({wrapper: sliderClassName, settings: productSettings});
		sliderFn();
		sliderName.mount();
		
		headerTitle.textContent = local.header.title;
		headerText.innerHTML = local.header.subtitle;
		promotionTitle.textContent = local.promotion.title;
		promotionSubtitle.textContent = local.promotion.subtitle;
		promotionText.textContent = local.promotion.text;
		promotionRulesTitle.textContent = local.promotionRules.title;
		promotionRulesText.forEach((text, i) => {
			text.textContent = local.promotionRules.text[i];
		});
		promotionRulesDescr.forEach((text, i) => {
			text.textContent = local.promotionRules.descr[i];
		});
		
		promotionRulesBtn.textContent = local.promotionRules.btn;
		if (curLang === 'ru') {
			promotionRulesBtn.setAttribute('href',
																		 './doc/promotion-rules.pdf');
			promotionMillionLogo.setAttribute('src', './img/million.png');
		} else {
			promotionRulesBtn.setAttribute('href',
																		 './doc/promotion-rules.pdf');
			promotionMillionLogo.setAttribute('src', './img/kz_million.png');
		}
		productsTitle.textContent = local.products.title;
		productsBtn.textContent = local.products.btn;
		winnersTitle.textContent = local.winners.title;
		winnersDescr.textContent = local.winners.subtitle;
		generalPartnersTitle.textContent = local.generalPartners.title;
		partnersTitle.textContent = local.partners.title;
		copyright.textContent = local.footer.copyright;
		answer.textContent = local.footer.answer;
		downloadText.textContent = local.footer.downloadText;
		helpDesk.textContent = local.footer.helpDesk;
	}
	
	return curLang;
}

export default changeLanguage;
