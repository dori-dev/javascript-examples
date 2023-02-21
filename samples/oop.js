function Capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

class Person {
  fullName = "";
  constructor(firstName, lastName, age) {
    this.firstName = Capitalize(firstName);
    this.lastName = Capitalize(lastName);
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  sayHello() {
    console.log(`Hello dear ${this.firstName}, welcome to my site.`);
  }
}

salar = new Person("Salar", "Dori", 18);
console.log(salar.firstName);
console.log(salar.fullName);
console.log(salar.age);
salar.sayHello();
mohammad = new Person("Mohammad", "Dori");
ali = new Person("Ali", "Akbari");
console.log("");

class User extends Person {
  constructor(firstName, lastName, age, field) {
    super(firstName, lastName, age);
    this.field = field.toLowerCase();
  }
  goToClass() {
    console.log(`Hey ${this.firstName}, go to ${this.field} class.`);
  }
}

class Student extends User {
  constructor(firstName, lastName, age, field) {
    super(firstName, lastName, age, field);
  }
}

student1 = new Student("mohammad", "dori", 18, "Math");
console.log(student1.field);
student1.sayHello();
student1.goToClass();
console.log(student1.fullName);
console.log("");

class Teacher extends User {
  constructor(firstName, lastName, age, field, terms) {
    super(firstName, lastName, age, field);
    this.terms = terms;
  }
}

teacher1 = new Teacher("Sajad", "Ahmadi", 40, "health", 2);
console.log(teacher1.fullName);
teacher1.goToClass();
console.log(teacher1.terms);
