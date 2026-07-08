// The header sidebar
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  };

  if (hamburger && offScreenMenu && menuOverlay) {
    hamburger.addEventListener("click", toggleMenu);
    menuOverlay.addEventListener("click", toggleMenu);
  }
});


// The swiper section
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