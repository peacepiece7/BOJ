let fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

let answer = "";

for (let i = 0; i <= input.length - 1; i++) {
  tmp = input[i].split(" ");
  if (tmp[1]) {
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
  }
}

console.log(answer);
