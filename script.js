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

//Carousel portfolio
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.story');
    const totalSlides = slides.length;

    // Calculate the new position
    currentSlide += step;

    // Loop through the slides
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Move the slider
    const slider = document.querySelector('.stories-slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

//Carousel services
let currentService = 0;

function moveService(step) {
    const icons = document.querySelectorAll('.icon');
    const totalIcons = icons.length;
    
    // Update the current position in the carousel
    currentService += step;

    // Wrap around the edges
    if (currentService >= totalIcons) {
        currentService = 0;
    } else if (currentService < 0) {
        currentService = totalIcons - 1;
    }

    // Move the icons-wrapper to the current icon
    const wrapper = document.querySelector('.icons-wrapper');
    wrapper.style.transform = `translateX(-${currentService * 100}%)`;
}

//Carousel testimonials
let currentTestimonial = 0;

function moveTestimonial(step) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Update the current testimonial index based on the direction of navigation (left or right)
    currentTestimonial += step;

    // Wrap around to the first testimonial if moving past the last one
    if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    } else if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1; // Wrap around to the last testimonial if moving before the first one
    }

    // Move the testimonials-slider to the current testimonial
    const slider = document.querySelector('.testimonials-slider');
    slider.style.transform = `translateX(-${currentTestimonial * 100}%)`; // Shifts the slider by 100% of the view width per step
}



document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      submitFormToServer(formData)
        .then(() => {
          successMessage.style.display = "block";
          errorMessage.style.display = "none";
          contactForm.reset();

          // Hide the success message after 3 seconds
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        })
        .catch((error) => {
          console.error("Form submission failed:", error);
          successMessage.style.display = "none";
          errorMessage.style.display = "block";
        });
    });
  });

  async function submitFormToServer(formData) {
    const response = await fetch(
      "https://eddyline-backend.onrender.com/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Form submission failed.");
    }
  }

  document
    .getElementById("contactButton")
    .addEventListener("click", function () {
      document
        .getElementById("contactFormSection")
        .scrollIntoView({ behavior: "instant" });
    });