import {productsArr} from '../constants/productsArr.js';
import slider from './slider.js';
import {productSettings} from '../constants/sliderSettings.js';

function createSliderWithLang() {
	let productsList = document.querySelector('#products-list');
	const productsSlider = slider({
																	wrapper: '.products__slider',
																	settings: productSettings,
																});
	
	function createProductsSlider() {
		productsList.innerHTML = '';
		let currLang = localStorage.getItem('lang');
		
		productsArr.forEach(productObj => {
			let desc = currLang === 'ru' ? productObj.descrRU : productObj.descrKZ;
			productsList.innerHTML += `
                           <li class="glide__slide product-item">
                              <div class="product-grid" style="background: url(${productObj.img})50% 50%/contain no-repeat"></div>
                              <div class="product-text">
                                 <p class="slider-text">${desc}</p>
                              </div>
                            </li>
                            `;
		});
	}
	
	createProductsSlider();
	
	return productsSlider;
}

export default createSliderWithLang;
