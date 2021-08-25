let start = new Date();
const fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString();

let currentNum = input;
let newNum = input;
let count = 0;
do {
  if (parseInt(newNum) > 9) {
    newNum = parseInt(newNum[0]) + parseInt(newNum[1]);
  } else {
    newNum = parseInt(newNum);
  }
  newNum = newNum.toString();

  newNum = currentNum[currentNum.length - 1] + newNum[newNum.length - 1];
  count++;
  currentNum = newNum;
} while (parseInt(newNum) !== parseInt(input));

console.log(count);
let end = new Date();
console.log("ms : ", end - start);
