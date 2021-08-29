// reduce
const reducer = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
};

const ary = [1, 2, 3, 4];
console.log(ary.reduce(reducer, 0));
// 6

// 중첩 배열 펼치기
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  console.log(accumulator, currentValue);
  return accumulator.concat(currentValue);
}, []);
console.log(flattened);
// [1,2,3,4,5]

// 객체 내 인스턴스 개수 새기 ( 문제로 나온 적 있었음)
const input = 1122000442319124;
const inputAry = input.toString().split("");

const result = inputAry.reduce((allVal, val) => {
  if (val in allVal) {
    allVal[val]++;
  } else {
    allVal[val] = 1;
  }
  return allVal;
}, {});
console.log(result);

// 속성으로 객체 분류

var people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
console.log(people[21]);

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    console.log(acc);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, "age");

console.log(groupedPeople);
