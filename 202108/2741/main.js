const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt").toString();

const inputNum = parseInt(input);

answer = "";
for (let i = 1; i <= inputNum; i++) {
  answer += i + "\n";
}
console.log(answer);
