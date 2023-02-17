let element = document.createElement("div");
element.hidden = true;
element.textContent = "You are offline!";
element.style.backgroundColor = "tomato";
element.style.color = "#fefefe";
element.style.width = "90%";
element.style.padding = "10px";
element.style.margin = "20px";
document.querySelector("body").prepend(element);

window.addEventListener("offline", (event) => {
  element.hidden = false;
});

window.addEventListener("online", (event) => {
  element.hidden = true;
});
