const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt").toString();

let num = parseInt(input);

const ary = [];
let count = input;
let line = "";
for (let i = 1; i <= input; i++) {
  // 1 2 3 4 5
  for (let i = 1; i < count; i++) {
    // 4 3 2 1 0
    line += " ";
  }
  for (let i = count; i <= num; i++) {
    //  1 2 3 4 5
    line += "*";
  }
  line += "\n";
  count--;
}
console.log(line);
