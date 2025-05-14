// Scroll horizontal das categorias
const scrollContainer = document.getElementById("categoria-scroll");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

if (scrollContainer && btnLeft && btnRight) {
  btnLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

// Toggle menu mobile
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
