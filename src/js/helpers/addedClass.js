function addedClassName(tag, className) {
	const classes = className.length > 0 ? className.split(' ') : className;
	tag.classList.add(...classes);
}

export default addedClassName;
