let students = [
  "Mohammad",
  "Salar",
  "Mehran",
  "Mina",
  "Zahra",
  "Amir",
  "Ali",
  "Salar",
];

students.splice(1, 2);
console.log(students);

students.splice(3, 0, "Sima", "Arash");
console.log(students);

students.splice(2, 1);
console.log(students);

students.splice(3, 1, "Javad");
console.log(students);
