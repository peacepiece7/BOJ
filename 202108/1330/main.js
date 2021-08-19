const fs = require("fs");

const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
  return console.log(">");
} else if (A < B) {
  return console.log("<");
} else {
  return console.log("==");
}
