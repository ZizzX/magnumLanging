import Glide from '@glidejs/glide';

function destroySlider({parent, elemForRemove, sliderName}) {
	const winnersParentElem = document.querySelector(parent),
			newContainer = winnersParentElem.querySelector(elemForRemove),
			slider = winnersParentElem.querySelector(sliderName);
	
	elemForRemove ? newContainer.remove() : null;
	sliderName ? new Glide(slider).destroy() : null;
}

export default destroySlider;
