const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/g);

const A = input[0];
const B = input[1];

// 주어진 두 번째 문자열의 길이만큼 for
// 그 안에서 계산을 반복 console.log를 찍음
// 전체 곱의 결과를 마지막에 출력

function multiSync(a, b) {
  for (let i = 0; i <= b.length - 1; i++) {
    const calcResult = a * b[b.length - 1 - i];
    console.log(calcResult);
  }
  console.log(a * b);
}

multiSync(A, B);
