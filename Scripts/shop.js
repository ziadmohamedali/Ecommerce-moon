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


// The sidebar section
document.addEventListener("DOMContentLoaded", () => {
    // Target DOM Elements
    const filterToggle = document.getElementById("filterToggle");
    const filterClose = document.getElementById("filterClose");
    const sidebarSection = document.querySelector(".sidebar-section");
    const filterOverlay = document.querySelector(".filter-overlay");
    const applyFilters = document.getElementById("applyFilters");
    const resetFilters = document.getElementById("resetFilters");

    // Open Menu Functions
    const openFilters = () => {
        sidebarSection.classList.add("active");
        filterOverlay.classList.add("active");
        document.body.classList.add("filters-open"); // Locks page scrolling
    };

    // Close Menu Functions
    const closeFilters = () => {
        sidebarSection.classList.remove("active");
        filterOverlay.classList.remove("active");
        document.body.classList.remove("filters-open"); // Restores page scrolling
    };

    // Reset Functionality: Clear all checkboxes inside the sidebar
    const clearAllFilters = () => {
        // Find all checkbox inputs inside the sidebar container
        const checkboxes = sidebarSection.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    // Event Listeners for Opening/Closing
    if (filterToggle) filterToggle.addEventListener("click", openFilters);
    if (filterClose) filterClose.addEventListener("click", closeFilters);
    if (filterOverlay) filterOverlay.addEventListener("click", closeFilters);
    
    // Apply Button: Just closes the sidebar panel for now
    if (applyFilters) {
        applyFilters.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }

    if (resetFilters) {
        resetFilters.addEventListener("click", (e) => {
            e.preventDefault();
            clearAllFilters();
        });
    }
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