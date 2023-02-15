function copy(object) {
  return JSON.parse(JSON.stringify(object));
}

let student1 = {
  name: "Mohammad",
  age: 18,
};

let student2 = copy(student1);

student1.age = 19;
student2.name = "Salar";

console.log(student1);
console.log(student2);
