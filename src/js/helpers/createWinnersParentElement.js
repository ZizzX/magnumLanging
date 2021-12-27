import createElement from './createElement.js';

function createWinnersParentElement() {
	const winnerParentElement = document.querySelector('.winners'),
			container = createElement(
					{attributeName: 'div', className: 'container'});
	
	return {
		winnerParentElement,
		container
	}
}

export default createWinnersParentElement;
