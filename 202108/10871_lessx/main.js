const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt").toString();

const inputArray = input.split(/\r?\n/gi);
const firstLine = inputArray[0];
const secondLine = inputArray[1];

const X = parseInt(firstLine.split(" ")[1]);

const ints = secondLine.split(" ");

const result = [];

ints.map((int) => {
  if (int < X) {
    result.push(int + " ");
  }
});
console.log(result.join(""));
