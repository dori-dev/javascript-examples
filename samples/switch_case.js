let age = 30;

switch (true) {
  case age > 60:
    console.log("You are old");
    break;
  case age > 40:
    console.log("You are adult");
    break;
  case age > 25:
    console.log("You are young.");
    break;
  case age > 18:
    console.log("You are teenager.");
    break;
  default:
    console.log("You are kid");
    break;
}
