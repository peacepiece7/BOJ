const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ")
  .map((item) => {
    return Number(item);
  });

const A = input[0];
const B = input[1];

function substract(a, b) {
  if (0 < a && b < 10) {
    return console.log(a - b);
  } else {
    return null;
  }
}

substract(A, B);
