function createElement({attributeName, className}) {
	const elem = document.createElement(attributeName);
	elem.classList.add(className);
	return elem;
}

export default createElement;
