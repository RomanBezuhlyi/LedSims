var swiper = new Swiper(".areas__carousel", {
  slidesPerView: 1.4,
  spaceBetween: 15,
  navigation: {
    prevEl: ".areas__btn-prev",
    nextEl: ".areas__btn-next",
  },
  pagination: {
    el: ".areas__pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  },
});
