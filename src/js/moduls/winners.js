import slider from './slider.js';
import {winnersSettings} from '../constants/sliderSettings.js';
import addedClassName from '../helpers/addedClass.js';
import VideoFrame from './videoframe.js';
import createWinnersList from '../helpers/createWinnersList.js';
import {descrBonus, descriptionText, descrMoney} from '../constants/winners.js';

class Winners {
	constructor({
								title,
								subtitle,
								winnersArray,
								winnersImages,
								lang,
								parent,
								slider,
								video,
								hasDescr,
							}) {
		this.title = title;
		this.subtitle = subtitle;
		this.winnersArray = winnersArray;
		this.winnersImages = winnersImages;
		this.parent = parent;
		this.lang = lang;
		this.slider = slider;
		this.video = video;
		this.descr = hasDescr;
	}
	
	render() {
		let card = document.createElement('div'),
				bant = document.createElement('div'),
				cardInner = document.createElement('div'),
				winnersSlider = document.createElement('div'),
				glideTrack = document.createElement('div'),
				glideSlides = document.createElement('ul'),
				glideArrows = document.createElement('div'),
				descrText = document.createElement('p');
		
		const elemAppend = (parent, child) => {
			parent.append(child);
		};
		
		addedClassName(card, 'winners__card');
		addedClassName(bant, 'bant');
		addedClassName(cardInner, 'winners__card-inner');
		addedClassName(glideTrack, 'glide__track');
		addedClassName(glideSlides, 'glide__slides');
		addedClassName(glideArrows, 'glide__arrows');
		addedClassName(descrText, 'winners__descr-text');
		addedClassName(winnersSlider,
									 `winners__slider slider row--mt ${this.slider}`);
		
		glideTrack.setAttribute('data-glide-el', 'track');
		glideArrows.setAttribute('data-glide-el', 'controls');
		
		elemAppend(this.parent, card);
		elemAppend(card, bant);
		elemAppend(card, cardInner);
		elemAppend(glideTrack, glideSlides);
		elemAppend(winnersSlider, glideTrack);
		elemAppend(winnersSlider, glideArrows);
		
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
		
		
		if (this.winnersArray) {
			createWinnersList({
													winnersArrayName: this.winnersArray.millionTenge,
													winnersDecription: descrMoney[this.lang],
													cardInner, winnersSlider});
			
			createWinnersList({
													winnersArrayName: this.winnersArray.millionBonus,
													winnersDecription: descrBonus[this.lang],
													cardInner,
													winnersSlider});
		} else {
			winnersSlider.style = 'display: none';
		}
		
		if (this.winnersImages) {
			this.winnersImages.forEach(imgItem => {
				let glideSlideListItem = document.createElement('li');
				addedClassName(glideSlideListItem, 'glide__slide');
				elemAppend(glideSlides, glideSlideListItem);
				elemAppend(cardInner, winnersSlider);
				glideSlideListItem.innerHTML = `<img src=${imgItem.img} class="winner-img" alt='Победитель конкурса' >`;
			});
			
			slider({
							 wrapper: `.${this.slider}`,
							 settings: winnersSettings,
							 showModal: true,
							 modalName: '.winners-modal',
							 modalImg: '.modal-img > img',
							 slideImg: '.glide__slide img',
						 }).mount();
		}
		
		if (this.video) {
			this.video.forEach((video, i) => {
				const videoElem = new VideoFrame().render('iframe', video.src);
				elemAppend(cardInner, videoElem);
			});
		}
		
		if (this.descr) {
			descrText.textContent = descriptionText[this.lang]
			elemAppend(cardInner, descrText);
		}
	}
}

export default Winners;
