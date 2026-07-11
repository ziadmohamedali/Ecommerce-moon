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
document.addEventListener("DOMContentLoaded", function () {
  var categoriesSwiper = new Swiper(".categoriesSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: false,
    observer: true,
    observeParents: true,
    breakpoints: {
      768: {
        enabled: false,
      }
    }
  });
});


// Our New Feature - Quick View Hover Button within Product Grid Cards
document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("quickViewModal");
  const closeBtn = document.getElementById("closeModalBtn");
  
  const mTitle = document.getElementById("modalTitle");
  const mPrice = document.getElementById("modalPrice");
  const mImg = document.getElementById("modalImg");
  const mDesc = document.getElementById("modalDesc");

  document.querySelectorAll(".quick-view-trigger").forEach(trigger => {
    trigger.addEventListener("click", (e) => {

      const title = e.target.getAttribute("data-title");
      const price = e.target.getAttribute("data-price");
      const img = e.target.getAttribute("data-img");
      const desc = e.target.getAttribute("data-desc");

      mTitle.textContent = title;
      mPrice.textContent = price;
      mImg.src = img;
      mImg.alt = title;
      mDesc.textContent = desc;

      modalOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove("is-active");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
});