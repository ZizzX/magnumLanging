import Glide from '@glidejs/glide';
import Modal from './showImgModal.js';

function slider({
									wrapper,
									showModal = false,
									settings,
									slideImg,
								}) {
	let slider;
	
	slider = new Glide(wrapper, settings);
	
	if (showModal) {
		if (wrapper.isArray) {
			console.log('isArray');
		}
		slider.on('mount.after', () => {
			let sliderImg = document.querySelectorAll(slideImg),
					modalName = document.querySelector('.winners-modal'),
					modalImg = document.querySelector('.modal-img > img'),
					currentImg = null;
			
			const modal = new Modal();
			
			sliderImg.forEach((slider, index) => {
				slider.addEventListener('click', (e) => {
					const target = e.target;
					let attr = target.attributes[0].value;
					currentImg = attr;
					modal.showModal({currentImg, modal: modalName, modalImg});
				});
			});
			
			modalName.addEventListener('click', (e) => {
				let target = e.target;
				if (target.classList.contains('overlay') ||
						target.classList.contains('close')) {
					return modal.closeModal({currentImg, modal: modalName, modalImg});
				}
			});
		});
	}
	
	return slider;
}

export default slider;
