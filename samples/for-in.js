Object.prototype.blah = "Hello";
Array.prototype.test = "Bye";

const iterable = [1, 2, 3];
iterable.foo = "Bar";

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(`* ${i}`);
  } else {
    console.log(`- ${i}`);
  }
  console.log(iterable[i]);
}

console.log("");

for (const i of iterable) {
  console.log(i);
}
