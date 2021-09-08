const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

function BEP(fixedCost, varCost, manCost) {
  let count = 1;

  if (varCost >= manCost) {
    count = -1;
    console.log(count);
    return;
  }

  let accumulator = fixedCost;
  let totalSellingCost = 0;
  let bolean = true;

  while (bolean) {
    accumulator += varCost;
    totalSellingCost += manCost;
    if (accumulator < totalSellingCost) {
      bolean = false;
    } else {
      count++;
    }
  }
  console.log(count);
  return;
}

BEP(A, B, C);
