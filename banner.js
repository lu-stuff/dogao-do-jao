let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Inicia o primeiro slide
showSlides(slideIndex);

// Troca automática a cada 15 segundos
setInterval(() => {
    changeSlide(1);
  }, 15000);

