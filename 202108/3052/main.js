const fs = require("fs");
// Todo :  if(!includes(input[i]%42){ result.push(...)} 이런 식으로 한번에 끝내자

// 수 10개를 입력받은 뒤, 42로 나눈 나머지를 구한다.
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(/\r?\n/gi)
  .map((value) => value % 42);

// value에 해당하는 index가 일치할 경우만 배열에 남긴다.
const result = input.filter((value, index) => {
  return input.indexOf(value) === index;
});
console.log(result.length);
