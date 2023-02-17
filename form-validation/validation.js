let form = document.querySelector(".form");
let username = document.querySelector("#username");
let usernameErrorMessage = document.querySelector("#usernameErrorMessage");
let password = document.querySelector("#password");
let passwordErrorMessage = document.querySelector("#passwordErrorMessage");
const usernamePattern = /^[a-zA-Z][\w._]{5,23}$/;
let passwordEvaluate = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Username Input

function usernameValidation(username) {
  if (usernamePattern.test(username.value)) {
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
  } else {
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  }
}

function sendUsernameErrorMessage(value) {
  if (value.length < 6) {
    usernameErrorMessage.textContent =
      "Your username must contain at least 6 characters.";
  } else if (value.length > 24) {
    usernameErrorMessage.textContent =
      "Your username must have a maximum of 6 characters.";
  } else if (!/^[a-zA-z].*$/.test(value)) {
    usernameErrorMessage.textContent =
      "Your username should starts with english alphabet.";
  } else if (!/^[a-zA-Z][\w._]{5,23}$/.test(value)) {
    usernameErrorMessage.textContent =
      "Your password should contains english alphabet, dot and underline.";
  }
}

form.username.addEventListener("input", (e) => {
  if (e.target.value) {
    username.textContent = e.target.value.toLowerCase();
  } else {
    username.textContent = "Please fill username field.";
  }
  sendUsernameErrorMessage(e.target.value);
  usernameValidation(e.target);
});

// Password Input

function passwordValidation(password) {
  let value = password.value;
  passwordEvaluate = 0;
  passwordEvaluate += /[A-Z]/.test(value) ? 1 : 0;
  passwordEvaluate += /[a-z]/.test(value) ? 1 : 0;
  passwordEvaluate += /[0-9]/.test(value) ? 1 : 0;
  passwordEvaluate += /[\W]/.test(value) ? 1 : 0;
  passwordEvaluate += value.length >= 6 ? 1 : 0;
  if (passwordEvaluate === 5) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }
}

function sendPasswordErrorMessage(value) {
  if (value.length < 6) {
    passwordErrorMessage.textContent =
      "Your password must contain at least 6 characters.";
  } else if (!/[a-z]/.test(value)) {
    passwordErrorMessage.textContent =
      "Your password should contains english alphabet.";
  } else if (!/[A-Z]/.test(value)) {
    passwordErrorMessage.textContent =
      "Your password should contains capital alphabet.";
  } else if (!/[0-9]/.test(value)) {
    passwordErrorMessage.textContent = "Your password should contains number.";
  } else if (!/[\W]/.test(value)) {
    passwordErrorMessage.textContent =
      "Your password should contains special character.";
  }
}

form.password.addEventListener("input", (e) => {
  if (e.target.value) {
    password.textContent = "*".repeat(e.target.value.length);
  } else {
    password.textContent = "Please fill password field.";
  }
  sendPasswordErrorMessage(e.target.value);
  passwordValidation(e.target);
});
