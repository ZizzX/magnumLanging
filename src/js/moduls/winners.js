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
								video,
							}) {
		this.title = title;
		this.subtitle = subtitle;
		this.winnersArray = winnersArray;
		this.winnersImages = winnersImages;
		this.parent = parent;
		this.lang = lang;
		this.slider = slider;
		this.video = video.src;
	}
	
	render() {
		let card = document.createElement('div'),
				bant = document.createElement('div'),
				cardInner = document.createElement('div'),
				winnersSlider = document.createElement('div'),
				glideTrack = document.createElement('div'),
				glideSlides = document.createElement('ul'),
				glideArrows = document.createElement('div'),
				iframeElementWrapper = document.createElement('div');
		
		function addedClassName(tag, className) {
			const classes = className.length > 0 ? className.split(' ') : className;
			tag.classList.add(...classes);
		}
		
		function createWinnersList(winnersArrayName, winnersDecription) {
			const winnersList = document.createElement('ul');
			winnersList.innerHTML = `<p class="winners--p winners__descr">${winnersDecription}</p>`;
			cardInner.append(winnersList);
			addedClassName(winnersList, 'winners__list');
			
			winnersArrayName.forEach((winner) => {
				let winnersListItem = document.createElement('li');
				addedClassName(winnersListItem, 'winners__list-item');
				
				winnersListItem.innerHTML =
						`
							<span class="winners-name">${winner.name}</span>
							<span class="winners-city">${winner.city}</span>
							`;
				
				winnersSlider.append();
				winnersList.append(winnersListItem);
			});
		}
		
		addedClassName(card, 'winners__card');
		addedClassName(bant, 'bant');
		addedClassName(cardInner, 'winners__card-inner');
		addedClassName(glideTrack, 'glide__track');
		addedClassName(glideSlides, 'glide__slides');
		addedClassName(glideArrows, 'glide__arrows');
		addedClassName(winnersSlider,
									 `winners__slider slider row--mt`);
		// addedClassName(winnersDescr, 'winners--p winners__descr');
		
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
			
			createWinnersList(this.winnersArray.millionTenge, descrMoney);
			createWinnersList(this.winnersArray.millionBonus, descrBonus);
			
			addedClassName(iframeElementWrapper, 'iframe');
			iframeElementWrapper.innerHTML =
					`
					<iframe
					width="100%"
					height="100%"
					src=${this.video}
					title="YouTube video player" frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
				`;
		} else {
			winnersSlider.style = 'display: none';
		}
		
		if (this.winnersImages) {
			this.winnersImages.forEach((imgItem, i) => {
				let glideSlideListItem = document.createElement('li');
				addedClassName(glideSlideListItem, 'glide__slide');
				
				glideSlideListItem.innerHTML = `<img src=./img/winner${i}.jpg>`;
				glideSlides.append(glideSlideListItem);
				
				const winner = slider({
																wrapper: winnersSlider,
																settings: winnersSettings,
																showModal: true,
																modalName: '.winners-modal',
																modalImg: '.modal-img > img',
																slideImg: '.glide__slide img',
															});
				
				cardInner.append(winnersSlider);
				winner.mount();
			});
		}
		const text = this.lang === 'ru' ? '*Список победителей предварительный и может быть скорректирован после проверки данных'
						:
						'*Жеңімпаздар тізімі бастапқы тізім болып табылады және деректерді тексергеннен кейін' +
						' түзетілуі мүмкін.';
		this.video ? (
				cardInner.appendChild(iframeElementWrapper),
				iframeElementWrapper.insertAdjacentHTML('afterend', `<p style="color: #7d0d13;">${text}</p>`)
		) : null;
		
		this.parent.append(card);
	}
}

export default Winners;
