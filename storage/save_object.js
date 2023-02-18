let person = {
  firstName: "Mohammad",
  lastName: "Dori",
  age: 18,
  access: false,
};

person = JSON.stringify(person);
localStorage.setItem("person", person);

let personItem = localStorage.getItem("person");
personItem = JSON.parse(personItem);

console.log(personItem);
console.log(personItem.age + 1);
console.log(personItem.firstName);

if (personItem.access) {
  console.log("You have access.");
} else {
  console.log("You does not have access.");
}
