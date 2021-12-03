'use strict';
import timer from './moduls/timer';
import slider from './moduls/slider.js';
import {productSettings, winnersSettings} from './constants/sliderSettings.js';
import changeLanguage from './moduls/changeLanguage.js';
import createSliderWithLang from './moduls/createSliderWithLang.js';

document.addEventListener('DOMContentLoaded', () => {
	timer();
	const createSlider = createSliderWithLang(),
			productsSlider = slider({
																wrapper: '.products__slider',
																settings: productSettings,
															});
	let curLang = localStorage.getItem('lang') || 'ru';
	localStorage.setItem('lang', curLang);
	
	createSlider();
	changeLanguage({
									 sliderName: productsSlider,
									 sliderFn: createSlider,
									 sliderClassName: '.products__slider',
									 curLang,
								 });
	
	productsSlider.mount();
});

/*let winnersSlider = slider({
 wrapper: '.winners__slider',
 settings: winnersSettings,
 showModal: true,
 modalName: '.winners-modal',
 modalImg: '.modal-img img',
 slideImg: '.glide__slide img',
 });
 winnersSlider.mount();*/
