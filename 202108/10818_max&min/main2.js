const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);
const answer = input[1].split(" ");

answer.sort((a, b) => a - b);
console.log(`${answer[0]} ${answer[answer.length - 1]}`);
