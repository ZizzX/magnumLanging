export const productSettings = {
	type: 'carousel',
	perView: 5,
	gap: 25,
	peek: {before: 0, after: 50},
	hoverpause: true,
	autoplay: 4000,
	height: 235,
	breakpoints: {
		1280: {
			perView: 5,
			gap: 20,
		},
		1100: {
			perView: 5,
			gap: 15,
			peek: {before: -15, after: 45},
		},
		996: {
			perView: 4,
			gap: 10,
		},
		800: {
			perView: 3,
		},
		550: {
			perView: 3,
			gap: 10,
			peek: {before: 0, after: 100},
		},
		480: {
			perView: 2,
			gap: 10,
			peek: {before: -20, after: 100},
		},
	},
};
export const winnersSettings = {
	type: 'slider',
	startAt: 0,
	width: 230,
	perView: 3,
	height: 385,
	gap: 20,
	breakpoints: {
		1280: {
			gap: 20,
			perView: 3,
		},
		1100: {
			gap: 15,
		},
		996: {
			gap: 10,
		},
		800: {
			perView: 3,
		},
		590: {
			perView: 2,
		},
	},
};
