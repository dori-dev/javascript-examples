let message;
let extra = " there";

// message = message ?? "Hello";
// extra = extra ?? "!";
message ??= "Hello";
extra ??= "!";

console.log(message + extra);
