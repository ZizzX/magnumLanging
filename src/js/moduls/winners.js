import slider from './slider.js';
import {winnersSettings} from '../constants/sliderSettings.js';
import Glide from '@glidejs/glide';

class Winners {
	constructor({
								title,
								subtitle,
								winnersArray,
								winnersImages,
								lang,
								parent,
								slider,
							}) {
		this.title = title;
		this.subtitle = subtitle;
		this.winnersArray = winnersArray;
		this.winnersImages = winnersImages;
		this.parent = parent;
		this.lang = lang;
		this.slider = slider;
	}
	
	render() {
		let winnersList = document.createElement('ul'),
				card = document.createElement('div'),
				bant = document.createElement('div'),
				cardInner = document.createElement('div'),
				winnersSlider = document.createElement('div'),
				glideTrack = document.createElement('div'),
				glideSlides = document.createElement('ul'),
				glideArrows = document.createElement('div');
		
		function addedClassName(tag, className) {
			const classes = className.length > 0 ? className.split(' ') : className;
			tag.classList.add(...classes);
		}
		
		addedClassName(card, 'winners__card');
		addedClassName(winnersList, 'winners__list');
		addedClassName(bant, 'bant');
		addedClassName(cardInner, 'winners__card-inner');
		addedClassName(glideTrack, 'glide__track');
		addedClassName(glideSlides, 'glide__slides');
		addedClassName(glideArrows, 'glide__arrows');
		addedClassName(winnersSlider,
									 `winners__slider slider row--mt`);
		
		glideTrack.setAttribute('data-glide-el', 'track');
		glideArrows.setAttribute('data-glide-el', 'controls');
		
		bant.innerHTML = `<img src="./img/winners-bant.png" alt="Поздравляем победителей, бант">`;
		
		cardInner.innerHTML =
				`
					<h3 class="winners__title">
						${this.title}
					</h3>
					<p class="winners__descr">${this.subtitle}</p>
				`;
		
		glideArrows.innerHTML =
				`
					<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
						<img src="./img/arrow.png"
									 alt="назад">
					</button>
					<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
						<img src="./img/arrow-prev.png"
									 alt="вперед">
					</button>
				`;
		
		card.append(bant);
		card.append(cardInner);
		glideTrack.append(glideSlides);
		winnersSlider.append(glideTrack);
		winnersSlider.append(glideArrows);
		
		if (this.winnersArray) {
			this.winnersArray.forEach((winner) => {
				let winners = document.createElement('li');
				addedClassName(winners, 'winners__list-item');
				
				winners.innerHTML =
						`
							<span class="winners-name">${winner.name}</span>
							<span class="winners-city">${winner.city}</span>
							`;
				
				winnersSlider.append();
				winnersList.append(winners);
			});
		} else {
			winnersList.style = 'display: none';
			winnersSlider.style = 'display: none';
		}
		
		if (this.winnersImages) {
			this.winnersImages.forEach((imgItem, i) => {
				let glideSlideListItem = document.createElement('li');
				addedClassName(glideSlideListItem, 'glide__slide');
				
				glideSlideListItem.innerHTML = `<img src=./img/winner${i}.jpg>`;
				glideSlides.append(glideSlideListItem);
			});
		}
		
		cardInner.append(winnersList);
		cardInner.append(winnersSlider);
		this.parent.append(card);
		
		const winner = slider({
														wrapper: winnersSlider,
														settings: winnersSettings,
														showModal: true,
														modalName: '.winners-modal',
														modalImg: '.modal-img > img',
														slideImg: '.glide__slide img',
													});
		winner.mount();
	}
}

export default Winners;
