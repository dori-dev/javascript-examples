let array1 = [0, 1, 2];
let array2 = [3, 4, 5];

// array1 = array1.concat(array2);
array1 = [...array1, ...array2];

console.log(array1);
