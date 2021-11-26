'use strict';

document.addEventListener('DOMContentLoaded', () => {
  import Glide, {Images} from '@glidejs/glide/dist/glide.modular.esm';

  const deadline = '2021-12-30';

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

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minuts.innerHTML = getZero(t.minuts);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  //SLIDER
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    gap: 25,
    length: 5,
    peek: {before: 0, after: 0},
    breakpoints: {
      1280: {
        perView: 4,
        gap: 20,
      },
      1100: {
        perView: 4,
        gap: 15,
      },
      996: {
        perView: 3,
        gap: 10,
      },
      800: {
        perView: 2,
        peek: {before: 50, after: 200},
      },
      590: {
        perView: 1,
        peek: {before: 50, after: 400},
      },
      589: {
        perView: 1,
        peek: {before: 50, after: 200},
      },
      480: {
        perView: 1,
        peek: {before: 50, after: 200},
      },
    },
  }).mount({Images});
});
