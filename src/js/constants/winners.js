export const winnersArray = {
	0: {
		millionTenge: [
			{
				name: 'Джусупова Айгуль',
				city: 'Алматы',
			},
			{
				name: 'Тимошевский Игорь',
				city: 'Алматы',
			},
			{
				name: 'Тойбаев Данияр',
				city: 'Алматы',
			},
			{
				name: 'Денис Болдырев',
				city: 'Алматы',
			},
			{
				name: 'Бибигуль Худайбергенова',
				city: 'Южно-Казахстанская обл.',
			},
		],
		millionBonus: [
			{
				name: 'Турабаева Лаура',
				city: 'Алматы',
			},
			{
				name: 'Шамова Наталья',
				city: 'Алматы',
			},
			{
				name: 'Меруерт Мырзабекова',
				city: 'Нур-Султан',
			},
			{
				name: 'Зюзина Елена',
				city: 'Алматы',
			},
			{
				name: 'Мырзакеримова Гулмира',
				city: 'Шымкент',
			},
		],
	},
	1: {
		millionTenge: [
			{
				name: 'Абрасулова Майра',
				city: 'Алматы',
			},
			{
				name: 'Трубникова Ольга',
				city: 'Алматы',
			},
			{
				name: 'Абрамов Василий',
				city: 'Алматы',
			},
			{
				name: 'Ергазин Олжас',
				city: 'Нур-Султан',
			},
			{
				name: 'Фармантаева Айгуль',
				city: 'Шымкент',
			},
		],
		millionBonus: [
			{
				name: 'Богданова Ольга',
				city: 'Караганда',
			},
			{
				name: 'Хелилова Алия',
				city: 'Алматы',
			},
			{
				name: 'Бабаева Асель',
				city: 'Алматы',
			},
			{
				name: 'Токбергенова Бахытгуль',
				city: 'Алматы',
			},
			{
				name: 'Раймкулов Курбанбек',
				city: 'Нур-Султан',
			},
		],
	},
};

export const winnersImagesArray = {
	0: [
		{
			img: './img/winners/1.jpeg',
		},
	],
	1: [
		{
			img: './img/winners/2.jpeg',
		},
	],
};

export const winnersVideo = {
	0: [
		{src: 'https://www.youtube.com/embed/eJ5MhZXsA2E'},
	],
	1: [
		{src: 'https://www.youtube.com/embed/ilDH6m0BuNY'},
	],
};

export const descrBonus = () => {
	let lang = localStorage.getItem('lang');
	switch (lang) {
		case 'ru' :
			return 'Победители Розыгрыша 1 000 000 бонусных баллов на карту Magnum Club';
		case 'kz' :
			return 'Magnum Club картасына 1 000 000 бонустық ұпай ұтыс ойынының жеңімпаздары';
		default:
			return;
	}
};

export const descrMoney = () => {
	let lang = localStorage.getItem('lang');
	switch (lang) {
		case 'ru' :
			return 'Победители Розыгрыша 1 000 000 тенге на карту Mastercard';
		case 'kz' :
			return 'Mastercard картасына 1 000 000 теңге ұтыс ойынының жеңімпаздары';
		default:
			return;
	}
};
//
// export const descrBonus = this.lang === 'ru' ? 'Победители Розыгрыша 1 000 000 бонусных баллов на карту Magnum Club'
// 		:
// 		'Magnum Club картасына 1 000 000 бонустық ұпай ұтыс ойынының жеңімпаздары';
//
// export const descrMoney = this.lang === 'ru' ? 'Победители Розыгрыша 1 000 000 тенге на карту Mastercard'
// 		:
// 		'Mastercard картасына 1 000 000 теңге ұтыс ойынының жеңімпаздары';
