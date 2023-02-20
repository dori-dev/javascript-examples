function getNumber() {
  return new Promise((resolve) => {
    for (let i = 0; i <= 1000; i++) {
      if (i === 1000) {
        resolve(i);
      }
    }
  });
}

console.log(1);
console.log(2);
getNumber().then((value) => console.log(value));
console.log(3);
console.log(4);
