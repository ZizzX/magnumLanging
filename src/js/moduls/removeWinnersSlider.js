import Glide from '@glidejs/glide';

function destroySlider({parent, elemForRemove, sliderName}) {
	const winnersParentElem = document.querySelector(parent),
			newContainer = winnersParentElem.querySelector(elemForRemove),
			slider = winnersParentElem.querySelector(sliderName);
	
	!!newContainer ? newContainer.remove() : null;
	slider ? new Glide(slider).destroy() : null;
}

export default destroySlider;
