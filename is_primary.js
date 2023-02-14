let n = 1000000007;
let isPrimary = true;

for (let i = 2; i <= Math.floor(n ** 0.5) + 1; i++) {
  if (n % i == 0) {
    isPrimary = false;
    break;
  }
}

console.log(n, isPrimary);
