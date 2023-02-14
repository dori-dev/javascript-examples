let student = {
  firstName: "Mohammad",
  lastName: "Dori",
  age: 18,
  languages: ["python", "javascript", "go", "cpp", "rust", "ruby"],
  active: true,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello() {
    return `Hello, ${this.fullName()}!`;
  },
  showLanguage() {
    this.languages.forEach((language, index) => {
      console.log(`${index + 1}. ${language}`);
    });
  },
};

console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);
console.log(student.languages);
console.log(student.languages.length);
console.log(student.active);
console.log("");

student.firstName = "Salar";
console.log(student["firstName"]);
console.log(student["lastName"]);
console.log(student["age"]);
console.log(student["languages"]);
console.log(student["languages"].length);
console.log(student["active"]);

console.log(student.fullName());
console.log(student.sayHello());
student.showLanguage();
