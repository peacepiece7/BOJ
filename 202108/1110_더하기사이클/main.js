const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt").toString();
// 26 ->2+6=8 -> 68 -> 6+8=14 -> 84
let currentNum = parseInt(input);
let count = 0;

do {
  const newNum = currentNum / 10 + (currentNum % 10);
  currentNum = (currentNum % 10) * 10;
  currentNum = currentNum + Math.floor(newNum % 10);
  count++;
} while (currentNum !== parseInt(input));

console.log(count);
