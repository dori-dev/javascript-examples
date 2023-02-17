function closeAccordion(children, target) {
  children.forEach((wrapper) => {
    if (wrapper != target) {
      wrapper.classList.remove("show");
    }
  });
}

function setAccordion(children) {
  children.forEach((wrapper) => {
    wrapper.querySelector("span").addEventListener("click", (e) => {
      wrapper.classList.toggle("show");
      closeAccordion(children, wrapper);
    });
  });
}

let accordions = document.querySelectorAll(".accordion");
Array.from(accordions).forEach((accordion) => {
  setAccordion(Array.from(accordion.children));
});
