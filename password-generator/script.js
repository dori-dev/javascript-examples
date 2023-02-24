const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

let password;

const random = (length) => Math.floor(Math.random() * length);

function getLowercase() {
  return lowerLetters[random(lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[random(upperLetters.length)];
}

function getNumber() {
  return numbers[random(numbers.length)];
}

function getSymbol() {
  return symbols[random(symbols.length)];
}

function generatePassword() {
  password = "";
  for (let i = 0; i < lenEl.value; i++) {
    password += generateX();
  }
  pwEl.innerText = password;
}

function generateX() {
  let xs = [];
  xs.push(getUppercase());
  xs.push(getLowercase());
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";
  return xs[random(xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const password = pwEl.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
  copyEl.innerText = "Copied!";
  setTimeout(() => {
    copyEl.innerText = "Copy";
  }, 2000);
});
