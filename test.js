var categoriesSwiper = new Swiper(".categoriesSwiper", {
  slidesPerView: 1.3, /* Displays one full item and wraps the next partly in screen view */
  spaceBetween: 16,
  centeredSlides: false,
  enabled: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false, /* Destroys swiper calculation rules safely on tablet/desktop views */
    }
  }
});