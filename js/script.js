const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const productList = document.querySelector(".recommended-product-list");
let currentScrollPosition = 0;
const scrollAmount = 300; // Adjust based on product size

rightArrow.addEventListener("click", () => {
    currentScrollPosition -= scrollAmount;
    productList.style.transform = `translateX(${currentScrollPosition}px)`;
});

leftArrow.addEventListener("click", () => {
    currentScrollPosition += scrollAmount;
    productList.style.transform = `translateX(${currentScrollPosition}px)`;
});
