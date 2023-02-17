let popupBtn = document.querySelector("button.popup-btn");
let popupModal = document.querySelector(".popup");

if (popupBtn) {
  var popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-wrapper";
  document.body.prepend(popupWrapper);
}

popupBtn.addEventListener("click", (e) => {
  popupModal.classList.add("show");
  popupWrapper.classList.add("show");
  let closePopup = () => {
    popupModal.classList.remove("show");
    popupWrapper.classList.remove("show");
  };
  let popupCloses = document.querySelectorAll(".popup-close");
  popupCloses.forEach((element) => {
    element.addEventListener("click", closePopup);
  });
  popupWrapper.addEventListener("click", closePopup);
});
