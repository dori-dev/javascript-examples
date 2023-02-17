const PADDING = 10 * 2;

function setMaxHeight(wrapper, contentDiv) {
  if (wrapper.classList.contains("show")) {
    contentDiv.style.maxHeight = `${contentDiv.scrollHeight + PADDING}px`;
  } else {
    contentDiv.style.maxHeight = null;
  }
}

function closeAccordion(children, target) {
  children.forEach((wrapper) => {
    if (wrapper != target) {
      wrapper.classList.remove("show");
      wrapper.querySelector("div").style.maxHeight = null;
    }
  });
}

function setAccordion(children) {
  children.forEach((wrapper) => {
    let contentDiv = wrapper.querySelector("div");
    setMaxHeight(wrapper, contentDiv);
    wrapper.querySelector("span").addEventListener("click", (e) => {
      wrapper.classList.toggle("show");
      setMaxHeight(wrapper, contentDiv);
      closeAccordion(children, wrapper);
    });
  });
}

let accordions = document.querySelectorAll(".accordion");
Array.from(accordions).forEach((accordion) => {
  setAccordion(Array.from(accordion.children));
});
