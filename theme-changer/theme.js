let theme = document.querySelector(".theme");
let currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

document.body.className = currentTheme;

Array.from(theme.children).forEach((child) => {
  child.addEventListener("click", (e) => {
    let themeColor = e.target.dataset.color;
    document.body.className = themeColor;
    localStorage.setItem("theme", themeColor);
  });
});
