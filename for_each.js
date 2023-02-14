let students = ["Mohammad", "Ali", "Mehran", "Javad", "Arash"];

students.forEach((student) => console.log(`Hello ${student}`));
console.log("");
students.forEach((student, index) => {
  console.log(`${index + 1}. Hello ${student}`);
});
