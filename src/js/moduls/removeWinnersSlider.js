import Glide from '@glidejs/glide';

function destroySlider({parent, elemForRemove, sliderName}) {
	const winnersParentElem = document.querySelector(parent),
			newContainer = winnersParentElem.querySelector(elemForRemove);
	
	elemForRemove ? newContainer.remove() : null;
	sliderName ? sliderName.destroy() : null;
}

export default destroySlider;
