const fs = require("fs");

const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(/\r?\n/gi);

const num = input[1].split("");
const answer = num.reduce((acc, cur) => {
  acc = acc + parseInt(cur);
  return acc;
}, 0);

console.log(answer);
