'use strict';
import * as lang from '../js/locale.json';
import Glide     from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', () => {

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
  let productsSlider = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    gap: 25,
    length: 5,
    breakpoints: {
      1280: {
        perView: 6,
        gap: 20,
      },
      1100: {
        perView: 6,
        gap: 15,
      },
      996: {
        perView: 4,
        gap: 10,
      },
      800: {
        perView: 4,
      },
      589: {
        perView: 3,
      },
      550: {
        perView: 3,
        gap: 5,
      },
      480: {
        perView: 3,
        gap: 8,
      },
    },
  });

  productsSlider.mount();

  const winnersSlider = new Glide('.winners__slider', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
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
  });

  winnersSlider.on('mount.after', () => {
    let winnersSlider = document.querySelector('.winners__slider'),
        slider = winnersSlider.querySelectorAll('.glide__slide img'),
        winnersModal = document.querySelector('.winners-modal'),
        modalImg = winnersModal.querySelector('.modal-img'),
        overlay = winnersModal.querySelector('.overlay'),
        close = winnersModal.querySelector('.close'),
        img = winnersModal.querySelector('.modal-img img'),
        currentImg = null;

    slider.forEach((slider, index) => {
      slider.addEventListener('click', (e) => {
        const target = e.target;
        let attr = target.attributes[0].value;
        currentImg = attr;
        showModal();
      });
    });

    function showModal() {
      winnersModal.classList.add('active');
      img.setAttribute('src', currentImg);
    }

    winnersModal.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('overlay') ||
          target.classList.contains('close')) {
        return closeModal();
      }
    });

    function closeModal() {
      currentImg = null;
      img.removeAttribute('src');
      winnersModal.classList.remove('active');
    }

  });
  winnersSlider.mount();

  // LANG START
  const lang = document.querySelectorAll('.lang');
  let curLang = 'ru';

  lang.forEach(langLink => {
    langLink.addEventListener('click', (e) => {
      const target = e.target;
      curLang = target.getAttribute('data-lang');
      localStorage.setItem('lang', curLang);
    });
  });

  function setPageLanguage() {

  }

  // LANG END

});
