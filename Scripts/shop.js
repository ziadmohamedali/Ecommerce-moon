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