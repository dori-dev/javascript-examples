let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a);
console.log(b);

console.log("");

const array = [1, 2, 3];
[array[0], array[1]] = [array[1], array[0]];
console.log(array);
