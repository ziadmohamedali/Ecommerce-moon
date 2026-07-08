var swiper = new Swiper(".teamSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0
    }
  }
});


// the header sidebar section

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  if (hamburger && offScreenMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  }
});