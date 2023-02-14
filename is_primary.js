function isPrimary(n) {
  let isPrimary = true;
  for (let i = 2; i <= Math.floor(n ** 0.5) + 1; i++) {
    if (n % i == 0) {
      isPrimary = false;
      break;
    }
  }
  return isPrimary;
}

console.log(isPrimary(1000000007));
console.log(isPrimary(1000000008));
console.log(isPrimary(2587));
console.log(isPrimary(1000000021));
