function destroySlider({parent, elemForRemove}) {
	const winnersParentElem = document.querySelector(parent),
			newContainer = winnersParentElem.querySelector(elemForRemove);
	!!newContainer ? newContainer.remove() : null;
}

export default destroySlider;
