function timer() {
	const deadline = '2021-12-31';
	
	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
				days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor((t / (1000 * 60 * 60)) % 24),
				minuts = Math.floor((t / (1000 * 60)) % 60),
				seconds = Math.floor((t / 1000) % 60);
		
		return {
			total: t,
			days,
			hours,
			minuts,
			seconds,
		};
	}
	
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else if(num < 0) {
			return `00`;
		} else {
			return num;
		}
	}
	
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minuts = timer.querySelector('#minuts'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);
		
		updateClock();
		
		function updateClock() {
			const t = getTimeRemaining(endtime);
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
			
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minuts.innerHTML = getZero(t.minuts);
			seconds.innerHTML = getZero(t.seconds);
		}
	}
	
	setClock('.timer', deadline);
}

export default timer;
