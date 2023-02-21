class Person {
  fullName = "";
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
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
