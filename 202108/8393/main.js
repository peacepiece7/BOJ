const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt").toString();
let num = parseInt(input);

let count = 0;
for (let i = 1; i <= num; i++) {
  count += i;
}
console.log(count, "");
