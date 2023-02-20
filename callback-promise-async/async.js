function getNumber() {
  for (let i = 0; i <= 1000; i++) {
    if (i === 1000) {
      return i;
    }
  }
}

async function init() {
  return await getNumber();
}

console.log(1);
console.log(2);
init().then((value) => console.log(value));
console.log(3);
console.log(4);
