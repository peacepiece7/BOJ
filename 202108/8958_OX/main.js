const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);

const testCase = input[0];
let oxAry = [];
for (let i = 1; i <= testCase; i++) {
  oxAry.push(input[i]);
}
oxAry.map((oxs) => {
  let result = 0;
  let count = 0;
  oxs.split("").map((ox) => {
    if (ox === "O") {
      count++;
      result += count;
    } else {
      count = 0;
    }
  });
  console.log(result);
  count = 0;
  result = 0;
});
