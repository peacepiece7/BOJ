const fs = require("fs");

const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);

let count = 1;

for (let i = 1; i < input.length; i++) {
  const answer = input[i].split(" ");
  const A = parseInt(answer[0]);
  const B = parseInt(answer[1]);
  if (0 < A && B < 10) {
    console.log(`Case #${count}: ${A + B}`);
    count++;
  }
}
