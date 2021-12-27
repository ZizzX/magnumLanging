import setElemAttribute from './setElemAttribute.js';

function changeElementLang({local, curLang}) {
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
			generalPartnersTitle = document.querySelector('.general-partners__title'),
			partnersTitle = document.querySelector('.partners__title'),
			copyright = document.querySelector('.copyright .text'),
			answer = document.querySelector('.answer'),
			downloadText = document.querySelector('.download-text'),
			helpDesk = document.querySelector('.help-desk p'),
			promotionMillionLogo = document.querySelector('.promotion__million-logo');
	
	
	headerTitle.innerHTML = local.header.title;
	headerText.innerHTML = local.header.subtitle;
	promotionTitle.textContent = local.promotion.title;
	promotionSubtitle.textContent = local.promotion.subtitle;
	promotionText.innerHTML = local.promotion.text;
	promotionRulesTitle.innerHTML = local.promotionRules.title;
	promotionRulesText.forEach((text, i) => {
		text.textContent = local.promotionRules.text[i];
	});
	promotionRulesDescr.forEach((text, i) => {
		text.textContent = local.promotionRules.descr[i];
	});
	
	promotionRulesBtn.textContent = local.promotionRules.btn;
	if (curLang === 'ru') {
		setElemAttribute(promotionRulesBtn, 'href',
										 './doc/agreement-magnum_RU.pdf');
		setElemAttribute(promotionMillionLogo, 'src', './img/million.png');
	} else {
		setElemAttribute(promotionRulesBtn, 'href',
										 './doc/agreement-magnum_KZ.pdf');
		setElemAttribute(promotionMillionLogo, 'src', './img/kz_million.png');
	}
	productsTitle.textContent = local.products.title;
	productsBtn.textContent = local.products.btn;
	generalPartnersTitle.textContent = local.generalPartners.title;
	partnersTitle.textContent = local.partners.title;
	copyright.textContent = local.footer.copyright;
	answer.textContent = local.footer.answer;
	downloadText.textContent = local.footer.downloadText;
	helpDesk.textContent = local.footer.helpDesk;
}

export default changeElementLang;
