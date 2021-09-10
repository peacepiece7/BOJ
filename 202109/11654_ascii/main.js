const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt").toString();

// 'happy'.charCodeAt(2)
// String.fromCharCode(112)
// String.fromCharCode(65, 83, 67, 73, 73)

console.log(input.charCodeAt(0));
