let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  if (e.target.textContent == "Click") {
    e.target.textContent = "Clicked";
  } else {
    e.target.textContent = "Click";
  }
});
