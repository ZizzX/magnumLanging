import {locale} from '../locale.js';
import {productSettings} from '../constants/sliderSettings.js';
import slider from './slider.js';

function changeLanguage({sliderName, sliderFn, sliderClassName, curLang}) {
	const lang = document.querySelectorAll('.lang');
	
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
	
	function removeHideClass(elem) {
		elem.classList.remove('hide');
	}
	
	function addHideClass(elem) {
		elem.classList.add('hide');
	}
	
	function getElemAttribute(elem, attr) {
		return elem.getAttribute(attr);
	}
	
	function setElemAttribute(elem, qualifiedName, value) {
		elem.setAttribute(qualifiedName, value);
	}
	
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
			
			setPageLanguage();
			
			sliderName.destroy();
			sliderName = slider(
					{wrapper: sliderClassName, settings: productSettings});
			sliderFn();
			sliderName.mount();
		});
	});
	
	function setPageLanguage() {
		const local = locale()[curLang];
		
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
			setElemAttribute(promotionRulesBtn, 'href', './doc/promotion-rules.pdf');
			setElemAttribute(promotionMillionLogo, 'src', './img/million.png');
		} else {
			setElemAttribute(promotionRulesBtn, 'href', './doc/promotion-rules.pdf');
			setElemAttribute(promotionMillionLogo, 'src', './img/kz_million.png');
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
	
	setPageLanguage();
}

export default changeLanguage;
