function f(x, y, z) {
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);
}

const args = [0, 1, 2];
f(...args);
