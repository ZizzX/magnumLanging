import Glide from '@glidejs/glide';

import createModalImg from './createModalImg.js';

function slider({
									wrapper,
									showModal = false,
									settings,
									slideImg,
									modalName,
									modalImg,
								}) {
	let slider;
	
	slider = new Glide(wrapper, settings);
	
	if (showModal) {
		slider.on('mount.after', createModalImg(slideImg, modalName, modalImg));
	}
	
	return slider;
}

export default slider;
