import {productsArr} from '../constants/productsArr.js';

function createSliderWithLang() {
	let productsList = document.querySelector('#products-list');
	
	return function createProductsSlider() {
		productsList.innerHTML = '';
		let currLang = localStorage.getItem('lang');
		
		productsArr[0].forEach(productObj => {
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
		;
	};
}

export default createSliderWithLang;
