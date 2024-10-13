// 동영상 js
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slide-container");
  const totalSlides = document.querySelectorAll(".slide-item").length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.onload = () => {
  showSlide(0);
};

// // 상품 js
// let currentIndex = 0; // Current slide index
// const items = document.querySelectorAll(".product-item"); // Get all product items
// const totalItems = items.length; // Total number of items

// function showSlide(index) {
//   const sliderContainer = document.querySelector(".slider-container");
//   const offset = -index * 100; // Calculate the offset for sliding
//   sliderContainer.style.transform = `translateX(${offset}%)`; // Move to the current slide
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalItems; // Increment index
//   showSlide(currentIndex); // Show the next slide
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Decrement index
//   showSlide(currentIndex); // Show the previous slide
// }

// // Optional: Auto-slide every 5 seconds
// setInterval(nextSlide, 5000);
let currentIndex = 0;

function showSlides(index) {
  const slidesContainer = document.querySelector(".slider-container");
  const totalSlides = document.querySelectorAll(".product-item").length;

  // Wrap around logic
  if (index >= totalSlides) {
    currentIndex = 0; // Wrap around to the first slide
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Wrap around to the last slide
  } else {
    currentIndex = index; // Set current index
  }

  // Move the slides container by the currentIndex
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nexttSlide() {
  showSlides(currentIndex + 1); // Go to the next slide
}

function prevvSlide() {
  showSlides(currentIndex - 1); // Go to the previous slide
}

// Initial display
window.onload = () => {
  showSlides(0); // Show the first slide on load
};
