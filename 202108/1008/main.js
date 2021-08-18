const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ")
  .map((res) => {
    return Number(res);
  });

const A = input[0];
const B = input[1];

function divide(a, b) {
  if (a > 0 && b < 10) {
    return console.log(a / b);
  } else {
    return null;
  }
}

divide(A, B);
