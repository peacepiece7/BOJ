const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt").toString();

const point = Number(input);

if (point >= 90) {
  return console.log("A");
} else if (point >= 80) {
  return console.log("B");
} else if (point >= 70) {
  return console.log("C");
} else if (point >= 60) {
  return console.log("D");
} else {
  return console.log("F");
}
