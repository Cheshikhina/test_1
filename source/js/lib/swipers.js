'use strict';
(function () {

  var swiperPreamble = new Swiper('.swiper-preamble', {
    slidesPerView: 1,
    speed: 700,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  var swiperBlock = new Swiper('.swiper-block', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 700,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.btn--next',
      prevEl: '.btn--prev',
    },
  });
})();
