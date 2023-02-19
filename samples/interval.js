let x = 0;

let sayHello = () => {
  x++;
  console.log(`${x}. Hello, there!`);
  if (x >= 10) {
    clearInterval(sayHelloInterval);
  }
};

// Calling the function after 3 seconds once
setTimeout(sayHello, 3 * 1000);

// Calling the function every 3 seconds
let sayHelloInterval = setInterval(sayHello, 3 * 1000);
