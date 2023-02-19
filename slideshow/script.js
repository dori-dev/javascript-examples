let active = 1;
let slideshow = document.querySelector(".slideshow");
let timer = slideshow.dataset.timer * 1000;
let slides = document.querySelectorAll(".slide");
let points = document.querySelectorAll(".points > span");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

function classSwitcher() {
  slides.forEach((slide) => slide.classList.remove("active"));
  points.forEach((point) => point.classList.remove("active"));
  slides[active].classList.add("active");
  points[active].classList.add("active");
}

function goNext() {
  active = active % slides.length;
  classSwitcher();
  active++;
}

setInterval(goNext, timer);
