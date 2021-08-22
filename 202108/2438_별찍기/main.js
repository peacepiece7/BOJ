const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt").toString();

let result = "*";
const answer = parseInt(input);
if (answer < 0 || 100 < answer) {
  return;
}
for (let i = 1; i <= answer; i++) {
  console.log(result);
  result += "*";
}
