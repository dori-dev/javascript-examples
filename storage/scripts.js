localStorage.setItem("firstName", "Mohammad");
localStorage.setItem("lastName", "Dori");
localStorage.setItem("age", 18);
localStorage.setItem("access", false);

let firstName = localStorage.getItem("firstName");
console.log(firstName);

let age = localStorage.getItem("age");
console.log(parseInt(age) + 1);
localStorage.removeItem("age");
age = localStorage.getItem("age");
console.log(age);

let access = localStorage.getItem("access");
if (access === "true") {
  console.log("You have access.");
} else {
  console.log("You does not have access.");
}

localStorage.clear();
