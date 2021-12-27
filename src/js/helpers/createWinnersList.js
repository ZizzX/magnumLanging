import addedClassName from './addedClass.js';

function createWinnersList({winnersArrayName, winnersDecription, cardInner, winnersSlider}) {
	const winnersList = document.createElement('ul');
	winnersList.innerHTML = `<p class="winners--p winners__descr">${winnersDecription}</p>`;
	cardInner.append(winnersList);
	
	addedClassName(winnersList, 'winners__list');
	
	winnersArrayName.forEach((winner) => {
		const winnersListItem = document.createElement('li');
		addedClassName(winnersListItem, 'winners__list-item');
		
		winnersListItem.innerHTML =
				`
							<span class="winners-name">${winner.name}</span>
							<span class="winners-city">${winner.city}</span>
							`;
		
		winnersSlider.append();
		winnersList.append(winnersListItem);
	});
}

export default createWinnersList;
