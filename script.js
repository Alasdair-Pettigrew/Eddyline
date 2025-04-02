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
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");

  let currentIndex = 0;
  let autoPlayInterval = null;
  const intervalTime = 5000; // 5 seconds

  // 1) Show the testimonial at `index`, hide others
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  // 2) Move to next or prev testimonial
  function moveTestimonial(step) {
    currentIndex += step;
    if (currentIndex < 0) {
      currentIndex = testimonials.length - 1;
    } else if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }
    showTestimonial(currentIndex);
  }

  // 3) Auto-rotate
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      moveTestimonial(1);
    }, intervalTime);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // 4) Attach arrow events
  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      stopAutoPlay();
      moveTestimonial(-1);
      startAutoPlay();
    });
  }
  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      stopAutoPlay();
      moveTestimonial(1);
      startAutoPlay();
    });
  }

  // 5) Initialize
  showTestimonial(currentIndex); // Show first testimonial
  startAutoPlay();              // Start auto rotation
});



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
      "https://eddyline-backend-3zyg.onrender.com/add",
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

    document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.story');
    const totalSlides = slides.length;
    const slider = document.querySelector(".stories-slider");

    function moveSlide(step) {
        currentSlide += step;

        // Loop through slides
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Attach event listeners to navigation buttons
    document.querySelector(".nav-button.prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".nav-button.next").addEventListener("click", () => moveSlide(1));
});
