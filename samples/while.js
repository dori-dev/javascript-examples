let number = 0;
let sum = 0;

while (number < 100) {
  number++;
  if (number >= 50) {
    break;
  }
  if (number in [2, 6, 10, 12]) {
    continue;
  }
  if (number % 2 == 0) {
    console.log(`number: ${number}`);
    sum += number;
  }
}

console.log(`Sum of numbers: ${sum}`);
