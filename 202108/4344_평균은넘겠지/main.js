const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi);
//  for ( testcase , N ( N을 더함, => 평균 ) )

for (let i = 0; i <= input.length - 1; i++) {
  const inputAry = input[i].split(" ");
  const testCase = parseInt(inputAry.slice(0, 1));
  const N = inputAry.slice(1, inputAry.length);
  let totalScore = 0;
  let average = [];
  N.forEach((value) => {
    totalScore += parseInt(value);
  });

  N.forEach((value) => {
    if (totalScore / testCase < parseInt(value)) {
      average.push(value);
    }
  });
  if (N.length) {
    console.log(`${((average.length / testCase) * 100).toFixed(3)}%`);
  }
}
