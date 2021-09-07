const N = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString();

const oneNumber = new Array(parseInt(N));

let count = 0;

for (let i = 1; i <= oneNumber.length; i++) {
  if (i < 100) {
    count++;
  } else {
    const splitedNum = i.toString().split("");
    const check = splitedNum.reduce((prev, cur, index) => {
      if (!splitedNum[index + 1]) {
        return prev;
      }
      const curArthmeticSeq = parseInt(splitedNum[index]) - parseInt(splitedNum[index + 1]);
      if (prev === curArthmeticSeq) {
        return prev;
      } else {
        return false;
      }
    }, parseInt(splitedNum[0]) - parseInt(splitedNum[1]));
    if (check) {
      count++;
    }
  }
}

console.log(count);
