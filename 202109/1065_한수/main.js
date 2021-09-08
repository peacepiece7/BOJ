const N = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString();

const input = parseInt(N);
let count = 0;

for (let i = 1; i <= input; i++) {
  if (i < 100) {
    count++;
  } else {
    const splitedNum = i.toString().split("");
    const A = parseInt(splitedNum[0]) - parseInt(splitedNum[1]);
    const B = parseInt(splitedNum[1]) - parseInt(splitedNum[2]);
    const C = splitedNum[3] ? parseInt(splitedNum[1]) - parseInt(splitedNum[2]) : null;
    if (A !== B) {
    } else if (C && B !== C) {
    } else {
      count++;
    }
  }
}
console.log(count);
