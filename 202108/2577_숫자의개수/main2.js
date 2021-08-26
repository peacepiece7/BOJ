const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const v = (a * b * c).toString();

for (let i = 0; i <= 9; i++) {
  const temp = i.toString();
  console.log(v.split(temp).length - 1);
}
