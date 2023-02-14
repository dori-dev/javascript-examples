function sayHello(name = "Salar") {
  console.log(`Hello ${name}!`);
}

const sayHello2 = function (name = "Salar") {
  console.log(`Hello ${name}!`);
};

sayHello("Mohammad");
sayHello2("Mohammad");
sayHello();
sayHello2();

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let consumer = fullName("Mohammad", "Dori");
sayHello(consumer);

function add(a = 0, b = 0) {
  return a + b;
}

console.log(add(2, 4));
console.log(add(6, 12));
console.log(add(12));
