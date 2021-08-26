const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(/\r?\n/gi);
const totalCount = input[0];
const newAverage = input[1].split(" ");
let result = 0;
const max = Math.max(...newAverage);

newAverage.map((point) => {
  result += (point / max) * 100;
});

console.log(result / totalCount);
