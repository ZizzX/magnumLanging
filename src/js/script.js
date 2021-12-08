'use strict';
import timer from './moduls/timer';
import slider from './moduls/slider.js';
import {productSettings} from './constants/sliderSettings.js';
import changeLanguage from './moduls/changeLanguage.js';
import createSliderWithLang from './moduls/createSliderWithLang.js';

document.addEventListener('DOMContentLoaded', () => {
	
	const createSlider = createSliderWithLang(),
			productsSlider = slider({
																wrapper: '.products__slider',
																settings: productSettings,
															});
	
	let curLang = localStorage.getItem('lang') ?? 'ru';
	localStorage.setItem('lang', curLang);
	
	createSlider();
	changeLanguage({
									 sliderName: productsSlider,
									 sliderFn: createSlider,
									 sliderClassName: '.products__slider',
									 curLang,
								 });
	
	timer();
	productsSlider.mount();
});

/*let winnersSlider = slider({
 wrapper: '.winners__slider.slide-1',
 settings: winnersSettings,
 showModal: true,
 modalName: '.winners-modal',
 modalImg: '.modal-img img',
 slideImg: '.glide__slide img',
 });
 winnersSlider.mount();*/
