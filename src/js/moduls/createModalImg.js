import Modal from './showImgModal.js';

const createModalImg = (slideImg, modalNameSelector, modalImgSelector) => {
	let sliderImg = document.querySelectorAll(slideImg),
			modalName = document.querySelector(modalNameSelector),
			modalImg = document.querySelector(modalImgSelector),
			currentImg = null;
	
	const modal = new Modal();
	
	sliderImg.forEach((slider, index) => {
		slider.addEventListener('click', (e) => {
			const target = e.target;
			let attr = target.src;
			currentImg = attr;
			modal.showModal({currentImg, modal: modalName, modalImg});
		});
	});
	
	modalName.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains('overlay') ||
				target.classList.contains('close')) {
			return modal.closeModal({currentImg, modal: modalName, modalImg});
		}
	});
};

export default createModalImg;
