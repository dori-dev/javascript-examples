function factorial_(number) {
  let result = 1;
  for (let i = 0; i < number; i++) {
    result *= number - i;
  }
  return result;
}

function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(factorial(3) === 6);
console.log(factorial(4) === 24);
console.log(factorial(100) === 9.33262154439441e157);
