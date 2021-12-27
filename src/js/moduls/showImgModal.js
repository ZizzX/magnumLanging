class Modal {
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
