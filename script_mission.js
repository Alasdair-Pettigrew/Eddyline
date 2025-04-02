// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', function() {
      // Toggle nav links visibility
      if (navLinks.style.height === '0px' || navLinks.style.height === '') {
        navLinks.style.height = `${navLinks.scrollHeight}px`;
      } else {
        navLinks.style.height = '0';
      }
      // Animate burger lines
      burger.classList.toggle('toggle');
    });
  });
  
  // ===== CAROUSEL FOR PARTNERS =====
  let currentPartner = 0;
  
  function movePartner(step) {
    // Make sure your HTML uses .partner for each partner item
    const partners = document.querySelectorAll('.partner');
    const totalPartners = partners.length;
    if (totalPartners === 0) return; // No partner elements
  
    currentPartner += step;
  
    // Wrap around
    if (currentPartner >= totalPartners) {
      currentPartner = 0;
    } else if (currentPartner < 0) {
      currentPartner = totalPartners - 1;
    }
  
    // Move the container
    // Make sure your HTML has a .partners-logo container
    const logoContainer = document.querySelector('.partners-logo');
    if (logoContainer) {
      logoContainer.style.transform = `translateX(-${currentPartner * 100}%)`;
    }
  }
  
  // Attach partner carousel event listeners (if you have them in your HTML)
  const partnerPrevBtn = document.querySelector(".partner-prev");
  const partnerNextBtn = document.querySelector(".partner-next");
  if (partnerPrevBtn) {
    partnerPrevBtn.addEventListener("click", () => movePartner(-1));
  }
  if (partnerNextBtn) {
    partnerNextBtn.addEventListener("click", () => movePartner(1));
  }
  
  
  // ===== CAROUSEL FOR SERVICES (KEY OFFERINGS) =====
  let currentService = 0;
  
  function moveService(step) {
    // Each .icon is one slide
    const icons = document.querySelectorAll('.icon');
    const totalIcons = icons.length;
    if (totalIcons === 0) return;
  
    currentService += step;
  
    // Wrap around
    if (currentService >= totalIcons) {
      currentService = 0;
    } else if (currentService < 0) {
      currentService = totalIcons - 1;
    }
  
    // Move .icons-wrapper
    const wrapper = document.querySelector('.icons-wrapper');
    if (wrapper) {
      wrapper.style.transform = `translateX(-${currentService * 100}%)`;
    }
  }
  
  // Attach service carousel event listeners (matching your HTML buttons)
  const servicePrevBtn = document.querySelector(".button.prev");
  const serviceNextBtn = document.querySelector(".button.next");
  if (servicePrevBtn) {
    servicePrevBtn.addEventListener("click", () => moveService(-1));
  }
  if (serviceNextBtn) {
    serviceNextBtn.addEventListener("click", () => moveService(1));
  }  