let popupButtons = document.querySelectorAll("button.popup-btn");

if (popupButtons.length) {
  var popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-wrapper";
  document.body.prepend(popupWrapper);
}

function closePopup(popupModal) {
  let closePopup = () => {
    popupModal.classList.remove("show");
    popupWrapper.classList.remove("show");
  };
  let popupCloses = document.querySelectorAll(".popup-close");
  popupCloses.forEach((element) => {
    element.addEventListener("click", closePopup);
  });
  popupWrapper.addEventListener("click", closePopup);
}

function setPopup(popupButton) {
  let popupDataNumber = popupButton.dataset.popup;
  let popupModal = document.querySelector(
    `.popup[data-popup="${popupDataNumber}"]`
  );
  popupButton.addEventListener("click", (e) => {
    popupModal.classList.add("show");
    popupWrapper.classList.add("show");
    closePopup(popupModal);
  });
}

popupButtons.forEach(setPopup);
