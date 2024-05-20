//Hamburger menu

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle nav links visibility
        if (navLinks.style.height === '0px' || navLinks.style.height === '') {
            navLinks.style.height = `${navLinks.scrollHeight}px`; // Set height to enable dropdown
        } else {
            navLinks.style.height = '0'; // Set height to zero to hide
        }

        // Animate burger lines
        burger.classList.toggle('toggle');
    });
});

// Carousel for partners
let currentPartner = 0;

function moveService(step) {
    const partners = document.querySelectorAll('.partner');
    const totalPartners = partners.length;

    // Update the current partner index based on the direction of navigation (left or right)
    currentPartner += step;

    // Wrap around to the first partner if moving past the last one
    if (currentPartner >= totalPartners) {
        currentPartner = 0;
    } else if (currentPartner < 0) {
        currentPartner = totalPartners - 1; // Wrap around to the last partner if moving before the first one
    }

    // Move the partners-logo container to the current partner
    const logoContainer = document.querySelector('.partners-logo');
    logoContainer.style.transform = `translateX(-${currentPartner * 100}%)`; // Shifts the container by 100% of its width per step
}