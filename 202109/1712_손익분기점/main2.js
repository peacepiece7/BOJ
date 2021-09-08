const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

let count = 1;

if (B >= C) {
  count = -1;
  console.log(count);
} else {
  const increment = C - B;
  console.log(Math.floor(A / increment) + 1);
}
