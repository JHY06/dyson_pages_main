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
const items = document.querySelectorAll(".product-list li"); // Select all product items
const totalItems = items.length; // Get the total number of items

function updateSlidePosition() {
    const productList = document.querySelector(".product-list");
    const itemWidth = items[0].clientWidth; // Get the width of a single item
    productList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function prevxSlide() {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous item
    } else {
        currentIndex = totalItems - 1; // Wrap to the last item
    }
    updateSlidePosition(); // Update the slide position
}

function nexttSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++; // Move to the next item
    } else {
        currentIndex = 0; // Wrap to the first item
    }
    updateSlidePosition(); // Update the slide position
}
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".product-slider", {
        slidesPerView: 3, // Adjust the number of slides visible at once
        spaceBetween: 20, // Space between slides
        navigation: {
            nextEl: ".nextx", // Selector for the next button
            prevEl: ".prevx", // Selector for the previous button
        },
        pagination: {
            el: ".swiper-pagination", // If you want pagination bullets
            clickable: true, // Allow clicking on pagination bullets
        },
        breakpoints: {
            // Responsive settings
            1024: {
                slidesPerView: 3, // 3 slides on large screens
            },
            768: {
                slidesPerView: 2, // 2 slides on medium screens
            },
            480: {
                slidesPerView: 1, // 1 slide on small screens
            },
        },
    });
});
