let form = document.querySelector(".form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
const usernamePattern = /^[a-zA-Z][\w._]{5,23}$/;
let passwordEvaluate = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.username.addEventListener("input", (e) => {
  if (e.target.value) {
    username.textContent = e.target.value.toLowerCase();
  } else {
    username.textContent = "Please fill username field.";
  }
  if (usernamePattern.test(e.target.value)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
  }
});

form.password.addEventListener("input", (e) => {
  if (e.target.value) {
    password.textContent = "*".repeat(e.target.value.length);
  } else {
    password.textContent = "Please fill password field.";
  }
  passwordEvaluate = 0;
  passwordEvaluate += /[A-Z]/.test(e.target.value) ? 1 : 0;
  passwordEvaluate += /[a-z]/.test(e.target.value) ? 1 : 0;
  passwordEvaluate += /[0-9]/.test(e.target.value) ? 1 : 0;
  passwordEvaluate += /[\W]/.test(e.target.value) ? 1 : 0;
  passwordEvaluate += e.target.value.length >= 6 ? 1 : 0;
  if (passwordEvaluate === 5) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
  }
});
