const fs = require("fs");

const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);

let max = input[0];
let maxIndex = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIndex = i;
  }
}

console.log(parseInt(max));
console.log(maxIndex + 1);
