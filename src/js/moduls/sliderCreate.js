import Winners from './winners.js';
import {winnersArray, winnersVideo, winnersImagesArray} from '../constants/winners.js';

function createWinnersSlider({
															 sliderLocaleObject,
															 hasWinners = false,
															 curLang,
															 container,
														 }) {
	
	const winnersLangObject = sliderLocaleObject.winners;
	
	if (hasWinners) {
		winnersLangObject.winnersTitles.forEach((week, index) => {
			return new Winners({
													 parent: container,
													 title: week.title,
													 subtitle: winnersLangObject.congrat,
													 lang: curLang,
													 winnersArray: winnersArray[index],
													 slider: `slider-${index + 1}`,
													 winnersImages: winnersImagesArray[index],
													 video: winnersVideo[index],
												 }).render();
		});
	} else {
		new Winners({
									title: winnersLangObject.title,
									subtitle: winnersLangObject.subtitle,
									parent: container,
									lang: curLang,
								}).render();
	}
}

export default createWinnersSlider;
