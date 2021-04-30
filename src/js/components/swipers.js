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
    disabledClass: 'differ-swiper-buttons--disabled'
  },
});