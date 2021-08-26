// sort로 최댓값을 index[0]에 오게 함
// array.map => result = index[0~index.length-1] / index[0] * 100
// console.log(result/totalCount)
const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(/\r?\n/gi);
const totalCount = input[0];
const newAverage = input[1].split(" ");
let result = 0;

newAverage
  .sort((a, b) => b - a)
  .map((point) => {
    result += (point / newAverage[0]) * 100;
    console.log(point);
    console.log(newAverage[0]);
  });

console.log(result / totalCount);
