class Modal {
	constructor(modal, img, currentImg) {
		this.modal = modal;
		this.img = img;
		this.currentImg = currentImg;
	}
	
	showModal({currentImg, modal, modalImg}) {
		modal.classList.add('active');
		modalImg.setAttribute('src', currentImg);
	}
	
	closeModal({currentImg, modal, modalImg}) {
		currentImg = null;
		modalImg.removeAttribute('src');
		modal.classList.remove('active');
	}
}

export default Modal;
