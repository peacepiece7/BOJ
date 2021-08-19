const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt").toString();

const year = parseInt(input);

if (year % 4 === 0 && year % 100 !== 0) {
  return console.log(1);
} else if (year % 400 === 0) {
  return console.log(1);
} else {
  return console.log(0);
}
