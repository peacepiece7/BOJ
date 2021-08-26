const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);
const N = input[0];
const answer = input[1].split(" ");
let max = parseInt(answer[0]);
let min = parseInt(answer[0]);

for (let i = 1; i <= N; i++) {
  const element = parseInt(answer[i - 1]);
  if (max < element) {
    max = element;
  } else if (min > element) {
    min = element;
  }
}

console.log(`${min} ${max}`);
