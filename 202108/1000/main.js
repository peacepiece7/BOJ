const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");

let num = input.map((item) => {
  return Number(item);
});

function sum(a, b) {
  if (a > 0 && b >= 10) {
    return console.log(a + b);
  } else {
    return console.log(null);
  }
}

sum(num[0], num[1]);
