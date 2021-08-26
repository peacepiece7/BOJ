const fs = require("fs");

const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/\r?\n/gi)
  .map((element) => parseInt(element));

const A = input[0];
const B = input[1];
const C = input[2];

const value = A * B * C;
const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 각각의 숫자가 호출될 때, 해당 숫자와 일치하는 인덱스의 value를 +1
value
  .toString()
  .split("")
  .forEach((val) => {
    result[val]++;
  });

result.map((el) => console.log(el));
