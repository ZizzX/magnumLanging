import slider from './slider.js';
import {winnersSettings} from '../constants/sliderSettings.js';
import Glide from '@glidejs/glide';
import addedClassName from '../helpers/addedClass.js';
import VideoFrame from './videoframe.js';
import createWinnersList from '../helpers/createWinnersList.js';

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
							}) {
		this.title = title;
		this.subtitle = subtitle;
		this.winnersArray = winnersArray;
		this.winnersImages = winnersImages;
		this.parent = parent;
		this.lang = lang;
		this.slider = slider;
		this.video = video;
	}
	
	render() {
		let card = document.createElement('div'),
				bant = document.createElement('div'),
				cardInner = document.createElement('div'),
				winnersSlider = document.createElement('div'),
				glideTrack = document.createElement('div'),
				glideSlides = document.createElement('ul'),
				glideArrows = document.createElement('div');
		
		addedClassName(card, 'winners__card');
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
			const descrBonus = this.lang === 'ru' ? 'Победители Розыгрыша 1 000 000 бонусных баллов на карту Magnum Club'
					:
					'Magnum Club картасына 1 000 000 бонустық ұпай ұтыс ойынының жеңімпаздары';
			
			const descrMoney = this.lang === 'ru' ? 'Победители Розыгрыша 1 000 000 тенге на карту Mastercard'
					:
					'Mastercard картасына 1 000 000 теңге ұтыс ойынының жеңімпаздары';
			
			createWinnersList({winnersArrayName: this.winnersArray.millionTenge, winnersDecription: descrMoney, cardInner, winnersSlider});
			createWinnersList({winnersArrayName: this.winnersArray.millionBonus, winnersDecription: descrBonus, cardInner, winnersSlider});
		} else {
			winnersSlider.style = 'display: none';
		}
		
		if (this.winnersImages) {
			this.winnersImages.forEach((imgItem, i) => {
				let glideSlideListItem = document.createElement('li');
				addedClassName(glideSlideListItem, 'glide__slide');
				
				glideSlideListItem.innerHTML = `<img src=./img/winners/${i + 1}.jpeg class="winner-img" alt='Победитель конкурса' >`;
				glideSlides.append(glideSlideListItem);
				cardInner.append(winnersSlider);
			});
		}
		
		const text = this.lang === 'ru' ? '*Список победителей предварительный и может быть скорректирован после проверки данных'
						:
						'*Жеңімпаздар тізімі бастапқы тізім болып табылады және деректерді тексергеннен кейін' +
						' түзетілуі мүмкін.';
		
		if (this.video) {
			this.video.forEach((video, i) => {
				const videoElem = new VideoFrame().render('iframe', video.src);
				cardInner.appendChild(videoElem);
				// cardInner.insertAdjacentHTML('afterend', `<p style="color: #7d0d13;">${text}</p>`);
			});
		}
		
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
