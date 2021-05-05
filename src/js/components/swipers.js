import Swiper from 'swiper/bundle';

//Full page swiper
new Swiper('.fullpage-container', {
  // wrapperClass: 'fullpage-wrapper',
  // slideClass: 'section',
  direction: 'vertical',
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    invert: false,
  },
});

//Differ mobile swiper
new Swiper('.differ__inner-container', {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.differ-swiper-buttons__next',
    prevEl: '.differ-swiper-buttons__prev',
    disabledClass: 'swiper-buttons--disabled'
  },
});

//Case swiper
new Swiper('.case__container', {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".case-swiper-buttons__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.case-swiper-buttons__next',
    prevEl: '.case-swiper-buttons__prev',
    disabledClass: 'swiper-buttons--disabled'
  },
});

new Swiper('.team__inner-container', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".team-swiper-buttons__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.team-swiper-buttons__next',
    prevEl: '.team-swiper-buttons__prev',
    disabledClass: 'swiper-buttons--disabled'
  },
});