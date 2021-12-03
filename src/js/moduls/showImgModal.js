class Modal {
	constructor(modal, img, currentImg) {
		this.modal = modal;
		this.img = img;
		this.currentImg = currentImg;
	}
	showModal() {
		this.modal.classList.add('active');
		this.img.setAttribute('src', this.currentImg);
	}
	
	closeModal() {
		this.currentImg = null;
		this.img.removeAttribute('src');
		this.modal.classList.remove('active');
	}
}

export default Modal;
