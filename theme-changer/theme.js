let theme = document.querySelector(".theme");

Array.from(theme.children).forEach((child) => {
  child.addEventListener("click", (e) => {
    let themeColor = e.target.dataset.color;
    document.body.className = themeColor;
  });
});
