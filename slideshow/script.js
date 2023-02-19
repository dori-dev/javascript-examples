let active = 0;
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
  active++;
  active = active % slides.length;
  classSwitcher();
}

function goPrevious() {
  active--;
  active = active < 0 ? active + slides.length : active;
  active = active % slides.length;
  classSwitcher();
  console.log(active);
}

let runSlideshow = setInterval(goNext, timer);

points.forEach((point, index) => {
  point.addEventListener("click", (e) => {
    active = index;
    classSwitcher();
  });
});

next.addEventListener("click", (e) => {
  goNext();
  clearInterval(runSlideshow);
  runSlideshow = setInterval(goNext, timer);
});

previous.addEventListener("click", (e) => {
  goPrevious();
  clearInterval(runSlideshow);
  runSlideshow = setInterval(goNext, timer);
});

slideshow.addEventListener("mouseover", (e) => {
  clearInterval(runSlideshow);
});

slideshow.addEventListener("mouseleave", (e) => {
  runSlideshow = setInterval(goNext, timer);
});
